# Frontend almundo hoteles ☄️🤖

cliente para monstrar los hoteles, filtrar por nombre y estrellas, adicional se realizo la vista de
agregar hoteles, version de node:8.11.1 lts

## funcionalidades

* consultar en lista los hoteles url `/`
* agregar hoteles `/admin-hotels`
* manejo de storage de imagenes con firebase
* filtrar por nombre y estrellas

## features 
  
* uso de  [react.js](https://reactjs.org/) en la version 16, se crea el proyecto con create-react-app
* manejo de estado global con [redux](https://redux.js.org/)
* configuracion de estilos [sass](https://sass-lang.com/)
* storage de images con [firebase/storage](https://firebase.google.com/docs/storage/web/start)
* tipado de props con [prop-types](https://www.npmjs.com/package/prop-types)

## configuracion de storage

al igual que en el proyecto de api, las credenciales son solo con fin de demo, para una aplicacion real se deben tener seguras como variables de entorno dependiendo del proveedor de cloud.

## correr el proyecto
para correr el api, tenemos dos opciones.

* en el README.md del repositorio se encuentra las instrucciones para correrlo con docker-compose.
* correr el comando 
``` bash

    $ yarn install && yarn dev

```
se debe tener previamente instalado [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

## autor

nicolas restrepo [@nic_restrepo](https://twitter.com/nic_restrepo)

## licencia

MIT

