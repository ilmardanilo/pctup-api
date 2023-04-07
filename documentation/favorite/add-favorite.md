# Favoritar Setup

> ## Dados
>
> ### Body

- usuarioId
- setupId

> ### Headers

- Authorization

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/v1/favorites**
2. ✅ **Verifica** se existe um usuário com o id fornecido
3. ✅ **Verifica** se existe um setup com o id fornecido
4. ✅ **Verifica** se existe um favorito com o usuárioId e o setupId fornecido
5. ✅ **Adiciona** um favorito com os dados informados
6. ✅ Retorna **201** com os dados do favorito

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **401** se o token fornecido for inválido
3. ✅ Retorna erro **404** se não existir um usuário com o id fornecido
4. ✅ Retorna erro **404** se não existir um setup com o id fornecido
5. ✅ Retorna erro **422** se existir um favorito com o usuárioId e o setupId fornecido
6. ✅ Retorna erro **500** se ocorrer um erro inesperado
