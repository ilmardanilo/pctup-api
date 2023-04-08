# Descurtir Setup

> ## Dados
>
> ### Path

- likeId

> ### Headers

- Authorization

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **DELETE** na rota **/api/v1/likes/{likeId}**
2. ✅ **Verifica** se existe uma curtida com o id fornecido
3. ✅ **Remove** a curtida
4. ✅ Retorna **204** com os dados da curtida

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **401** se o token fornecido for inválido
3. ✅ Retorna erro **404** se não existir a curtida com o id fornecido
4. ✅ Retorna erro **500** se ocorrer um erro inesperado
