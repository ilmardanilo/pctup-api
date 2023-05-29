# Buscar setups por usuário id

> ## Dados
>
> ### Path

- userId

> ### Headers

- Authorization

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/v1/setups/users/{userId}**
2. ✅ **Busca** o usuário com o id fornecido
3. ✅ **Verifica** se o usuário com o id fornecido existe
4. ✅ **Busca** os setups referentes ao usuário com o id fornecido
5. ✅ Retorna **200** com os setups do usuário e suas informações

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **401** se o token fornecido for inválido
3. ✅ Retorna erro **404** se não existir um usuário com o id fornecido
4. ✅ Retorna erro **500** se ocorrer um erro inesperado
