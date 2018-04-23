## Almundo prueba 

## Estructura del repositorio

- backend-api
    - controllers
    - models
    - .dockerignore
    - .gitignore
    - api.js
    - config.js
    - Dockerfile
    - package.json
    - README.md
    - server.js

- front-end
    - config
    - public
    - scripts
    - src
    - .dockerignore
    - .gitignore
    - Dockerfile
    - package.json
    - README.md

- docker-compose.yml

## Correr el proyecto

para correr el proyecto tenemos dos opciones.

1. En la carpeta raiz hay un archivo docker-compose.yml, este archivo orquesta los dos contenedores,
backend y frontend al mismo tiempo, solo corriendo el comando en donde este ubicado el archivo.

``` bash
    $ docker-compose up
```
previamente se debe tener instalado docker-compose en la maquina en la cual se corre el proyecto
adjunto link [docker-compose](https://docs.docker.com/compose/install/#install-compose)

2. dentro de cada proyecyo `backend-api` y `front-end` se encuentra el REAME.md para correrlos individualemte,
el api corre en el puerto 3001 y el frontend 3000, tener esto en cuenta si se desea cambiar los puertos.


## autor

nicolas restrepo [@nic_restrepo](https://twitter.com/nic_restrepo)

## licencia

MIT


