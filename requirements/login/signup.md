# Cadastro

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/v1/signup**
2. ✅ Recebe no corpo da requisição os parâmetros **name**, **email** e **password**
3. ✅ **Valida** se já existe um usuário com o email fornecido
4. ✅ Gera uma senha **criptografada** (essa senha não pode ser descriptografada)
5. ✅ **Cria** uma conta para o usuário com os dados informados, **substituindo** a senha pela senha criptografada
6. ✅ Gera um **token** de acesso a partir do ID do usuário com 1 hora de expiração
7. ✅ Retorna **201** com o token de acesso e o nome do usuário

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **422** se o email fornecido já estiver em uso
3. ✅ Retorna erro **500** se der erro ao tentar gerar uma senha criptografada
4. ✅ Retorna erro **500** se der erro ao tentar criar a conta do usuário
5. ✅ Retorna erro **500** se der erro ao tentar gerar o token de acesso
