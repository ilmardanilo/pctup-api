import { ISetupService } from '../entity/interfaces/setup-service-interface';
import { ISetupRepository } from '../repository/setup-repository-interface';
import {
  UnprocessableEntityError,
  NotFoundError,
} from '../../../helpers/errors';
import {
  IParamsAddImage,
  IParamsCreateSetup,
  ISetup,
} from '../entity/interfaces/setup-interface';
import { IUserRepository } from '../../user/repository/user-repository-interface';
import { ICloudinaryExternalService } from '../../../infra/external/cloudinary-service';
import {
  IImage,
  hasTypeImageAllowed,
  removeLocalImage,
} from '../../../helpers/utils';

export class SetupService implements ISetupService {
  constructor(
    private readonly setupRepository: ISetupRepository,
    private readonly userRepository: IUserRepository,
    private readonly cloudinaryService: ICloudinaryExternalService,
  ) {}

  async createSetup(params: IParamsCreateSetup): Promise<ISetup> {
    const { usuarioId } = params;

    const user = await this.userRepository.getUserById(usuarioId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    return this.setupRepository.createSetup(params);
  }

  async getSetups(): Promise<ISetup[]> {
    return await this.setupRepository.getSetupsActivesAndPublics();
  }

  async getSetupsByUserId(userId: string): Promise<ISetup[]> {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }
    return await this.setupRepository.getSetups({ usuarioId: userId });
  }

  async deleteSetup(setupId: string): Promise<void> {
    const setup = await this.setupRepository.getSetupById(setupId);

    if (!setup) {
      throw new NotFoundError('Setup não encontrado.');
    }

    await this.setupRepository.deleteSetup(setupId);
  }

  async updateSetupById(
    setupId: string,
    params: Partial<ISetup>,
  ): Promise<void> {
    if (!Object.keys(params).length) {
      throw new UnprocessableEntityError(
        'Informe pelo menos um parâmetro para ser atualizado.',
      );
    }

    const setup = await this.setupRepository.getSetupById(setupId);

    if (!setup) {
      throw new NotFoundError('Setup não encontrado.');
    }

    await this.setupRepository.updateSetupById(setupId, {
      ...params,
      estaAtivo: false,
    });
  }

  async removeImage(setupId: string, publicId: string): Promise<void> {
    const setup = await this.setupRepository.getSetupById(setupId);

    if (!setup) {
      throw new NotFoundError('Setup não encontrado.');
    }

    const hasImageWithPublicId = setup.imagens?.some(
      (image) => image.publicId === publicId,
    );

    if (!hasImageWithPublicId) {
      throw new UnprocessableEntityError(
        'Não existe imagem com esse publicId no setup.',
      );
    }

    await this.cloudinaryService.delete(publicId);

    const remainingImages = setup.imagens?.filter(
      (image) => image.publicId !== publicId,
    );

    await this.setupRepository.updateSetupById(setupId, {
      imagens: remainingImages,
    });
  }

  async addImage({ setupId, file }: IParamsAddImage): Promise<IImage> {
    try {
      if (!hasTypeImageAllowed(file.mimeType)) {
        throw new UnprocessableEntityError(
          'A imagem deve ser do tipo png, jpg ou jpeg.',
        );
      }

      const setup = await this.setupRepository.getSetupById(setupId);

      if (!setup) {
        throw new NotFoundError('Setup não encontrado.');
      }

      const { public_id, url } = await this.cloudinaryService.upload(file.path);

      const image: IImage = {
        publicId: public_id,
        url,
      };

      await this.setupRepository.addImage(setupId, image);

      return image;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      removeLocalImage(file.path);
    }
  }
}
