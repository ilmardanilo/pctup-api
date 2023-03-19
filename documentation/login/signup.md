# Cadastro

> ## Dados
>
> ### Body

- name
- email
- password

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/v1/signup**
2. ✅ **Valida** se já existe um usuário com o email fornecido
3. ✅ Gera uma senha **criptografada** (essa senha não pode ser descriptografada)
4. ✅ **Cria** uma conta para o usuário com os dados informados, **substituindo** a senha pela senha criptografada
5. ✅ Gera um **token** de acesso a partir do ID do usuário com 1 hora de expiração
6. ✅ Retorna **201** com o token de acesso, o nome e o id do usuário

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **422** se o email fornecido já estiver em uso
3. ✅ Retorna erro **500** se der erro ao tentar gerar uma senha criptografada
4. ✅ Retorna erro **500** se der erro ao tentar criar a conta do usuário
5. ✅ Retorna erro **500** se der erro ao tentar gerar o token de acesso
