<p align="center">
<img align="center" alt="Prisma-Express-Typescript" width="750px" height="121px" src=".github/Prisma-with-express.png"
style="text-align: center;" />
</p>
<br />

# **API with Prisma 2**

Repositorio de exemplo praticado para em outros projetos utilizar do Prisma.

## **🚀 Rodando o projeto**

Para rodar o projeto é necessário rodar um banco Postgres em sua maquina.
<br>

O próximo passo é instalar as depêndencias (com yarn ou npm):

**`yarn install` or `npm install`**

Logo depois você deve alterar o arquivo `.env.example` para `.env` e modifique a variavel com as configurações do seu banco Postgres.

E então pode-se rodar:

**`yarn dev` or `npm run dev`**

_Caso queira rodar em outro banco, lembre-se de procurar na documentação do Prisma._

<br>

## **📍 Bibliotecas**

- Express
- Prisma
- TSNodeDEV

<br>

## **📦 Instalação do Prisma 2**

<br>

#### Adicionar globalmente em sua maquina.

<pre>
$ yarn global add prisma
</pre>

### Start

<pre>
$ yarn add @prisma/cli -D
$ npx prisma init
</pre>

#### Converte um banco de dados (Postgres/MySQL) Antigo para Model do Prisma 2

<pre>
$ yarn prisma introspect
</pre>

#### Prisma Client

<pre>
$ yarn add @prisma/client
$ yarn prisma generate
</pre>

## 📖 Link e referências

- [Prisma](https://www.prisma.io/) - Next-generation ORM
  for Node.js and TypeScript
