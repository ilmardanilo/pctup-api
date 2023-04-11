# Adicionar uma imagem ao setup

> ## Dados
>
> ### Path

- setupId

> ### Body (multipart/form-data)

- image

> ### Headers

- Authorization

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/v1/setups/upload-image/{setupId}**
2. ✅ **Verifica** se foi fornecido uma imagem
3. ✅ **Verifica** se o formato da imagem é do tipo png, jpg ou jpeg
4. ✅ **Verifica** se existe um setup com o id fornecido
5. ✅ Faz **upload** da imagem no cloudinary e **adiciona** no campo imagens do setup
6. ✅ **Remove** a imagem recebida da pasta local
7. ✅ Retorna **200** com os dados da imagem (publicId e url)

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **401** se o token fornecido for inválido
3. ✅ Retorna erro **400** se o usuário não enviar uma imagem
4. ✅ Retorna erro **422** se o formato da imagem for inválido
5. ✅ Retorna erro **404** se não existir um setup com o id fornecido
6. ✅ Retorna erro **500** se ocorrer um erro inesperado
