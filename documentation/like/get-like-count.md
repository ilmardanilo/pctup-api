# Listar contagem de curtidas

> ## Dados
>
> ### Query

- setupId

> ### Headers

- Authorization

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/v1/likes/count**
2. ✅ **Verifica** se o setup com o id fornecido existe
3. ✅ Retorna **200** com a contagem de curtida de um setup

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **404** se não existir um setup com o id fornecido
3. ✅ Retorna erro **500** se ocorrer um erro inesperado
