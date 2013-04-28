TODOs
==============
Sistema de prueba para mostrar la funcionalidad de jQuery Mobile en el VII simposium de software libre de la mixteca.

Contiene un servidor web desarrollado con express sobre node.js

Descripción
-----------
Éste es un pequeño sistema para manejo de lista de tareas (TODO list) web con interfaz diseñada para dispositivos móviles, como son tabletas y smart phones.

Prerequisitos
-------------

- node.js
- npm (ya incluido en versiones recientes de node)

Instalación
-----------
Estando dentro del directorio de proyecto, ejecutar el siguiente comando

  $ npm install

Se creará un directorio **node_modules** donde se instalarán todas las dependencias del proyecto, entre las cuales figura:

- express: Framework para aplicaciones web
- ejs: Mmanejador de plantillas
- underscore: Librería de utilidades
- jugglingdb: Mapeador relacional de objetos (ORM)
- jugglingdb-sqlite3: Adaptador para manejo de bases de datos sqlite

Ejecución
---------
Lanzar el archivo app.js por medio de node:

  $ node app.js

¡Todo listo! Accede a **localhost:3000** desde tu navegador web.
