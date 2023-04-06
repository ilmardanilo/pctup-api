# Remover comentário por id

> ## Dados
>
> ### Headers

- Authorization

> ### Path

- commentId

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **DELETE** na rota **/api/v1/comments/{commentId}**
2. ✅ **Verifica** se o comentário com o id fornecido existe
3. ✅ **Remove** o comentário
4. ✅ Retorna **204**, sem dados

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **401** se o token fornecido for inválido
3. ✅ Retorna erro **404** se não existir um comentário com o id fornecido
4. ✅ Retorna erro **500** se ocorrer um erro inesperado
