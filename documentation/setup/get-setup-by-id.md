# Buscar usuário por id

> ## Dados
>
> ### Path

- setupId

> ### Headers

- Authorization

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/v1/setups/{setupId}**
2. ✅ **Busca** o setup com o id fornecido
3. ✅ **Verifica** se o setup com o id fornecido existe
4. ✅ Retorna **200** com os dados do setup

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **401** se o token fornecido for inválido
3. ✅ Retorna erro **404** se não existir um setup com o id fornecido
4. ✅ Retorna erro **500** se ocorrer um erro inesperado
