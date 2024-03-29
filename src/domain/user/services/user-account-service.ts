import { IUserAccountService } from '../entity/interfaces/user-account-service-interface';
import {
  IParamsCreateAccount,
  IResponseCreateAndAuthenticateAccount,
} from '../entity/interfaces/user-interface';
import { IUserAccountRepository } from '../repository/user-account-repository-interface';
import {
  UnprocessableEntityError,
  ForbiddenError,
  NotFoundError,
} from '../../../helpers/errors';
import { PRIVATE_KEY } from '../../../main/config/env-constants';

import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

export class UserAccountService implements IUserAccountService {
  constructor(private readonly userAccountRepository: IUserAccountRepository) {}

  async createAccount({
    name,
    email,
    password,
  }: IParamsCreateAccount): Promise<IResponseCreateAndAuthenticateAccount> {
    const account = await this.userAccountRepository.getAccountByEmail(email);

    if (account) {
      throw new UnprocessableEntityError(
        'Já existe um usuário com esse email.',
      );
    }

    const salt = 12;
    const hashedPassword = await hash(password, salt);

    const { id } = await this.userAccountRepository.createAccount({
      name,
      email,
      password: hashedPassword,
    });

    const accessToken = this._generateToken(id);

    return {
      id,
      name,
      accessToken,
    };
  }

  async authenticate(
    email: string,
    password: string,
  ): Promise<IResponseCreateAndAuthenticateAccount> {
    const account = await this.userAccountRepository.getAccountByEmail(email);

    if (!account) {
      throw new NotFoundError('Não existe usuário com esse email.');
    }

    const isEqual = await compare(password, account.senha);

    if (!isEqual) {
      throw new ForbiddenError('Senha incorreta!');
    }

    const accessToken = this._generateToken(String(account._id));

    return {
      id: String(account._id),
      name: account.nome,
      accessToken,
    };
  }

  private _generateToken(id: string): string {
    const token = sign({ id }, PRIVATE_KEY, { expiresIn: '7 days' });
    return token;
  }
}
