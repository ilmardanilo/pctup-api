# Listar curtidas por userId

> ## Dados
>
> ### Path

- userId

> ### Headers

- Authorization

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/v1/likes/users/{userId}**
2. ✅ **Verifica** se o usuário com o id fornecido existe
3. ✅ Retorna **200** com todas as curtidas de um usuário

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **404** se não existir um usuário com o id fornecido
3. ✅ Retorna erro **500** se ocorrer um erro inesperado
