# Login

> ## Caso de sucesso

1. Recebe uma requisição do tipo **POST** na rota **/api/v1/login**
2. Recebe no corpo da requisição os parâmetros **email** e **password**
3. **Busca** o usuário com o email e senha fornecidos
4. Gera um **token** de acesso a partir do ID do usuário
5. Retorna **200** com o token de acesso e o nome do usuário

> ## Exceções

1. Retorna erro **404** se a rota não existir
1. Retorna erro **404** se não existir um usuário com o email fornecido
1. Retorna erro **422** se a senha fornecida estiver incorreta
1. Retorna erro **500** se der erro ao tentar gerar o token de acesso
