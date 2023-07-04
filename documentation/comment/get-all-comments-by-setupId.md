# Listar Comentários por setupId

> ## Dados
>
> ### Path

- setupId

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/v1/comments/setups/{setupId}**
2. ✅ **Verifica** se o setup com o id fornecido existe
3. ✅ Retorna **200** com todos os comentários com o mesmo setupId

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **404** se não existir um setup com o id fornecido
3. ✅ Retorna erro **500** se ocorrer um erro inesperado
