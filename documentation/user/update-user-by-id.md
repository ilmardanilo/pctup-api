# Atualizar usuário por id

> ## Dados
>
> ### Headers

- Authorization

> ### Path

- userId

> ### Body

- nome
- dataNascimento
- profissao
- estado
- cidade

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **PUT** na rota **/api/v1/users/{userId}**
2. ✅ **Verifica** se pelo menos um parâmetro foi fornecido para ser atualizado
3. ✅ **Verifica** se o usuário com o id fornecido existe
4. ✅ **Atualiza** o usuário com os dados recebidos
5. ✅ Retorna **204**, sem dados

> ## Exceções

1. ✅ Retorna erro **404** se a rota não existir
2. ✅ Retorna erro **401** se o token fornecido for inválido
3. ✅ Retorna erro **422** se nenhum parâmetro para atualizar for fornecido
4. ✅ Retorna erro **404** se não existir um usuário com o id fornecido
5. ✅ Retorna erro **500** se ocorrer um erro inesperado
