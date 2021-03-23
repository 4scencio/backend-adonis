# Comandos Gerais AdonisCLI

## Iniciar Projeto Adonis

```
npx create-adonis-ts-app backend
```

## Selecionar Tipo de Projeto

```
API Server -> Model & Controller
Web Application -> MVC (Model, View & Controller)
```

## Criar Controller

```
node ace make:controller {{name} -r
```

## Criar Model

```
node ace make:model {{name}}
```

## Instalar ORM Lucid p/ DB

```
npm i @adonisjs/lucid@alpha 
```

## Selecionar o Banco de Dados

```
node ace invoke @adonisjs/lucid
```

## Criar Migration

```
node ace make:migration {{name}}
```

## Gerar Migration

```
node ace migration:run
```

## Listar Rotas Criadas

```
node ace list:routes
```

# Comandos Lucid@Adonis

```
npm i @adonisjs/lucid@alpha
node ace invoke @adonisjs/lucid
```

# Comandos Docker

Install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Create container with MySQL
$ docker-compose up -d

# Create database structure
$ node ace migration:run

# install dependencies
$ npm install

# server with changes watcher
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

