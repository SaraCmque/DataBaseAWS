# DataBaseAWS
# Descripción del Proyecto
Este proyecto es una base de datos alojada en AWS utilizando una instancia del servicio EC2 llamada 'ST0246-dbserver'. La base de datos está diseñada para almacenar y gestionar datos de una Plataforma de Gestion de Aprendizaje para cursos en linea de NODO EAFIT. 
# Caracteristicas Principales:
- Alojamiento en la nube: Las bases de datos (de mongodb y sql) se encuentran alojadas en una instancia EC2 en AWS, lo que proporciona escalabilidad y disponibilidad.
- Interfaz SQL: La base de datos permite interactuar mediante consultas SQL estándar para insertar, actualizar y consultar datos. Se realizó el desarrollo web utilizando Node.js y JavaScript, con la implementación de una API llamada Express. Además, se crea una base de datos en MongoDB y se desarrolla una API adicional para realizar consultas, inserciones y actualizaciones a dicha base de datos.
- API con Express: Se implementa una API utilizando el framework Express, permitiendo el manejo de rutas, peticiones y respuestas HTTP.

# Indicaciones
- La Base de Datos SQL se encuentra en la carpeta 'Entrega_final', en el archivo 'esquema.sql' al igual que el desarrollo web de la pagina.
- La implementacion en mongodb se encuentra en el archivo llamado 'nodejs-mongodb-nodo-final'

# Rutas
para ver los datos de mongodb:
- de la tabla Teachers:
  - <direccion_ip>/nodo/Teachers, <direccion_ip>/nodo/TeacherInsert, <direccion_ip>/nodo/TeacherUpdate:id, <direccion_ip>/nodo/TeacherDelete:id
- de la tabla Students:
  - <direccion_ip>/nodo/Students, <direccion_ip>/nodo/StudentInsert, <direccion_ip>/nodo/StudentUpdate/:id, <direccion_ip>/nodo/StudentDelete/:id

