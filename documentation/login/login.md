# Login

> ## Dados
>
> ### Body

- email
- password

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/v1/login**
2. ✅ **Busca** o usuário com o email fornecido
3. ✅ **Verifica** se a senha fornecida é igual a senha do usuario resgatado pelo email
4. ✅ Gera um **token** de acesso a partir do ID do usuário
5. ✅ Retorna **200** com o token de acesso, o nome e o id do usuário

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **404** se não existir um usuário com o email fornecido
3. ✅ Retorna erro **403** se a senha fornecida estiver incorreta
4. ✅ Retorna erro **500** se der erro inesperado
