# Backend api hoteles almundo 👨🏼‍💻🚀

api de prueba para almundo hoteles, version de node:8.11.1 lts

## funcionalidades

* agregar hoteles `/api/add-hotel`
* consultar todos los hoteles `/api/all-hotels`
* consultar un solo hotel `/single-hotel/:id`
* elimar hotel `/delete-hotel/:id`
* modicar hotel `/update-hotel/:id`

## features
* creacion de contenedor con [Docker](https://www.docker.com/)
* [express](https://expressjs.com/) como mini framework
* linter y buenas practicas de codigo con [XO](https://github.com/xojs/xo) 
* tipado de data en endpoint con [celebrate](https://www.npmjs.com/package/celebrate)
* proteccion de headers en peticiones con [helmet](https://www.npmjs.com/package/helmet)

## persistencia de datos

se uso mongodb como base de datos para persistir los datos, y mongoose como ODM para manipular
la data, la base de datos esta en el cloud [mongoAtlas](https://www.mongodb.com/cloud/atlas), 
el usuario y password se utilizan solo para fines de este demo, en caso de un despliegue a produccion, no se debera pasar el user y password asi, se deben configurar en variables secretas,
dependiendo del proveedor de cloud.

Si se desea cambiar la base de datos de cloud a premisa simplemente se debe cambiar la url en la conexion.

## Correr el api

para correr el api, tenemos dos opciones.

* en el README.md del repositorio se encuentra las instrucciones para correrlo con docker-compose.

* segunda opcion para correr el api 

``` bash

    $ npm i && npm run dev

```

el api corre por el puerto 3000 si se desea cambiar el puerto, en el archivo **config.js** esta la opcion.

## autor

nicolas restrepo [@nic_restrepo](https://twitter.com/nic_restrepo)

## licencia

MIT
