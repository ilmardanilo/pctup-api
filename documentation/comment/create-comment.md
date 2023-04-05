# Cadastrar Comentário

> ## Dados
>
> ### Body

- usuarioId
- setupId
- descricao

> ### Headers

- Authorization

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/v1/comments**
2. ✅ **Verifica** se existe um usuário com o id fornecido
3. ✅ **Verifica** se existe um setup com o id fornecido
4. ✅ **Cria** um comentário com os dados informados
5. ✅ Retorna **201** com o comentário criado

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **401** se o token fornecido for inválido
3. ✅ Retorna erro **404** se não existir um usuário com o id fornecido
4. ✅ Retorna erro **404** se não existir um setup com o id fornecido
5. ✅ Retorna erro **500** se ocorrer um erro inesperado
