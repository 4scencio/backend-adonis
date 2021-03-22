# Comandos Básicos 

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

