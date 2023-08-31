# Desafío IACC Backend

## Requerimientos

- [Docker](https://www.docker.com/products/docker-desktop/)

## Instalación

1. Crear una copia del archivo `.env.example` y renombrarlo a `.env`

2. Correr los siguientes comandos:

```bash
# Instalar node_modules
$ npm install

# Ejecutar docker-compose
$ docker compose up -d --build
```

## Build

```bash
# dev
$ npm run start

# watch mode
$ npm run start:dev

# prod
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
