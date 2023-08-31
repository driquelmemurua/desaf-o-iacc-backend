# Desafío IACC Backend

## Requerimientos

- [Docker](https://www.docker.com/products/docker-desktop/)

## Instalación

1. Crear una copia del archivo `.env.example` y renombrarlo a `.env` en el directorio base

2. Correr los siguientes comandos en la terminal:

    ```bash
    # Instalar node_modules
    $ npm install

    # Levantar contenedores de docker
    $ docker compose up -d --build
    ```

3. Probar si se levantó el servicio correctamente con CURL

    ```bash
    # Output: Pong!
    $ curl --location 'http://localhost:3000/ping'
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
