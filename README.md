<h3 align="center">
  🚀 API desenvolvida p/ gerenciamento de contatos
</h4>

## 🔬 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- <img align="left" alt="Javascript" width="26px" src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" />NodeJs

- <img align="left" alt="Postgres" width="26px" src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" />Postgres

- <img align="left" alt="Docker" width="26px" src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" />Docker

## 💻 Projeto
A aplicação foi desenvolvida com o objetivo de aprender como é criado um CRUD com a lib express, PostgreSQL, Docker, comandos em SQL e boas práticas.

## ℹ️ Como instalar

```bash

# instale as dependências
yarn

```
<br />

**Variáveis de Ambiente**
Crie as variáveis de ambiente de acordo com o arquivo .env.example

```bash

cp .env.example .env

```

**🎲 Prepare o Banco de Dados**
<br />

Instale o PostgresSQL e defina as variáveis de ambiente baseadas no exemplo acima para se conectar ao banco de dados, ou você pode utilizar o Docker a partir desses comandos:
```bash

# Create container and set Database
$ docker compose up -d

# Stop container
$ docker compose stop

```

## ℹ️ Como executar o projeto
```bash
yarn dev
```
