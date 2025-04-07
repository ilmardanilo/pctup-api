# 🚀 Backend do projeto PCtup  

**PCtup** é uma rede social para entusiastas de setups! 🎮💻 Aqui, você encontra o código que alimenta o backend do projeto, desenvolvido com **Node.js** e **TypeScript**, seguindo boas práticas de desenvolvimento.  

## 📝 Funcionalidades  

- **Gerenciamento de usuários**: Cadastro, edição, login e autenticação com JWT.  
- **Interação com setups**: Curtir, comentar, avaliar e marcar como favorito setups.  
- **Análise de setups**: Administração de setups enviados pelos usuários antes de publicação.  
- **Upload de imagens**: Gerenciamento de imagens utilizando Cloudinary.  
- **APIs documentadas**: Documentação clara das rotas com Swagger.  

---

## ⚙️ Tecnologias Utilizadas  

- **Node.js** + **Express**  
- **TypeScript**  
- **MongoDB**  
- **Swagger**  
- **Cloudinary**  
- **JWT**  

---

## 🚀 Instalação e Uso  

### Pré-requisitos  

- **Node.js** e **npm** instalados.  
- **MongoDB** configurado e em execução.  
- **Conta no Cloudinary** (obtenha as credenciais).  

### Passos  

1. **Clone o repositório**  
   ```bash
   git clone git@github.com:ilmardanilo/pctup-api.git
   cd pctup-api
   ```  

2. **Instale as dependências**  
   ```bash
   npm install
   ```  

3. **Configure as variáveis de ambiente**  
   Crie um arquivo `.env` na pasta environments do projeto com as seguintes variáveis:  
   ```env
    PORT=3333

    DATABASE_URI=
    DATABASE_NAME=
    
    PRIVATE_KEY=
    
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
   ```  

4. **Inicie o servidor**  
   ```bash
   npm run dev
   ```  
   O backend estará disponível em `http://localhost:3333`.  

---

## 📄 Documentação da API  

Acesse a documentação Swagger em:  
`http://localhost:3333/api-docs`  

---

## 🛠️ Boas Práticas  

O backend segue princípios de:  
- **Arquitetura Limpa**  
- **Princípios SOLID**  
- **Boas práticas REST**  

---

## 🖼️ Demonstração  

Uma breve demonstração do backend pode ser encontrada na aplicação frontend do **PCtup**: [[link para o repositório do frontend](https://github.com/IsaiasAlmeida20/PCtup)].  

---

## 🤝 Contribuição  

Sinta-se à vontade para contribuir com melhorias ou correções. Basta abrir uma **issue** ou enviar um **pull request**!  

---

## 🧑‍💻 Desenvolvedores  

- **Ilmar Danilo** 

---

## 📄 Licença  

Este projeto está sob a licença [MIT](LICENSE).  

--- 
