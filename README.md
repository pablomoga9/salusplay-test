Aplicación de recetas y categorías realizada con React y Laravel. 

## Uso
Los ficheros del framework Laravel y dependencias se encuentran embebidos en la carpeta principal. Los pertenecientes a React y la parte Frontend se encuentran en el interior de la carpeta "recetas_react".
Para poner a disposición de uso la aplicación, una vez clonada, se deberán ejecutar los siguientes comandos:

**Laravel**

-Para instalar los paquetes y dependencias:
```
php composer.phar update

```

-Habilitar base de datos:
```
php artisan migrate:fresh --seed

```
Se procederá a la generación de datos de prueba provenientes de los ficheros Factory generados con Faker.

-Por último, para iniciar el servidor:
```
php artisan serve

```

**React/Vite**

-Situandonos en la carpeta adecuada instalaremos las dependencias necesarias:
```
cd recetas_react
npm install

```
-Para iniciar:

```
npm run dev
```

**.env**

Para poder rellenar los datos del fichero .env, existe un fichero de ejemplo(.env.example) donde están volcados los mismos campos utilizados en la parte del servidor.

En el caso del fichero perteneciente a la sección del front, la única variable de entorno utilizada es la siguiente:

```
VITE_BACKEND_URL=
```
En ella se aporta la URL de local host. Ej: http://localhost:5000


**Imágenes**

Existe la opción de almacenar imágenes en la misma aplicación, en la carpeta 'storage\app\images'. Se utilizan las rutas locales para la implementación en la aplicación. Para la generación de datos de prueba, hay 10 imágenes con sus respectivas rutas asociadas aleatoriamente a las distintas recetas:



