# Adicionar uma imagem ao setup

> ## Dados
>
> ### Path

- setupId

> ### Query

- publicId

> ### Headers

- Authorization

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **DELETE** na rota **/api/v1/setups/delete-image/{setupId}**
2. ✅ **Verifica** se existe um setup com o id fornecido
3. ✅ **Verifica** se existe uma imagem com o publicId fornecido no setup
4. ✅ **Exclui** a imagem do cloudinary
5. ✅ **Remove** a imagem do setup
6. ✅ Retorna **204**, sem dados

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **401** se o token fornecido for inválido
3. ✅ Retorna erro **404** se não existir um setup com o id fornecido
4. ✅ Retorna erro **422** se não existir uma imagem com o publicId fornecido no setup
5. ✅ Retorna erro **500** se ocorrer um erro inesperado
