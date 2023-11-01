<div align="center">
  <img src="https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/logo-icons/apple-touch-icon.png"
  width="200px"
  style="margin-bottom: 24px"
  alt="Logo">

# **Auth Form NextJS**

🚀 https://auth-form-next-js.vercel.app 🚀  
Essa é uma aplicação **FullStack** com **formulários** seguros para o cadastro, login de usuários e envio de emails, desenvolvida utilizando o framework **NextJS 13** e integrando com **APIs** de um **backend próprio**.

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/neliocursos/exemplo-readme/blob/main/LICENSE)

</div>

# Autor

👤 Cauã Soares

💼 https://www.linkedin.com/in/ocauasoares

# APIs desenvolvidas para o projeto

- API para as funcionalidades de **cadastro**, **login** e **autenticação** de usuários  
  🔒 https://github.com/ocsoares/Auth-Form-NextJS-API

- API para a funcionalidade de **enviar email**  
  📧 https://github.com/ocsoares/Send-Email-Microservice-RabbitMQ

# Estrutura do projeto

![Estrutura](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/structure.png)

Esse projeto foi desenvolvido para utilizar formulários seguros para a autenticação de usuários e envio de emails, integrando com APIs robustas e aplicando a segurança com **JWT** (JSON Web Token).

## Middleware

![Middleware](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/middleware.png)

## Pasta app

![Pasta app](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/app-folder.png)

## Trecho da configuração do Next Auth

![Configuração do Next Auth](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/next-auth-options.png)

## Cadastro de usuários

![Arquivos do cadastro](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/signup-files.png)

![Código da página de cadastro](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/signup-page.png)

![Página de cadastro](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/signup-web.png)

## Login de usuários

![Arquivos do login](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/login-files.png)

![Código da página de login](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/login-page.png)

![Página de login](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/login-web.png)

## Envio de emails

![Arquivos do envio de email](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/send-email-files.png)

![Código da página de envio de email](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/send-email-page.png)

![Página de envio de email](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs/send-email-web.png)

# Principais tecnologias e bibliotecas utilizadas

- TypeScript
- NextJS
- MaterialUI
- Next Auth
- Zod
- React Hook Form
- Lodash
- JWT

## Características e funcionalidades do projeto:

### Estrutural 🛠️

- Clean Code
- SOLID
- Clean Architecture
- Integração com **APIs** desenvolvidas especificamente para esse projeto
  <br>
  <br>

### Funcionalidades 🎯

- Formulários para cadastro, login de usuários e envio de emails, **protegendo** e **validando** a **entrada** desses formulários com a biblioteca **Zod**
- Mostra os **erros** nos campos do formulário para o usuário
- Prevenção de ataques **Brute Force**
- Opção de **login social** com contas do **Google** e do **GitHub**, utilizando autorização **OAuth 2.0**
- Opção de "**Lembrar-me**" que oferece um **JWT** com tempo de expiração **maior** para a **sessão** do usuário durar **mais** tempo
- Autenticação e proteção da rota de _enviar email_ apenas para **usuários logados**
- Fornecimento e checagem de **JWT** para o usuário **logado**, para **todas** as opções de **login** disponível
- Alertas personalizados

# Executar o projeto localmente

Pré-requisitos: Typescript e NodeJS

```bash
# clonar o repositório
git clone https://github.com/ocsoares/Auth-Form-NextJS/

# instalar as bibliotecas
npm install

# criar um arquivo .env.local na pasta raiz do projeto

# configurar esse .env.local baseado no arquivo .env.example

# transpilar os arquivos do projeto para .js
npm run build

# executar o projeto
npm start
```
