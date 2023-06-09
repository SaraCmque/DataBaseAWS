mysql -u root -p

create database nodo_entrega3;
use nodo_entrega3;


create table administrador(
id_admin INT not null auto_increment primary key,
nombre_completo VARCHAR(30) NOT NULL,
email VARCHAR(30) NOT NULL UNIQUE,
contrasena VARCHAR(30) NOT NULL
);

create table usuario(
id_nodo INT not null auto_increment primary key,
ref_bancaria VARCHAR(30) NOT NULL
);

create table profesor(
doc_id VARCHAR(12) not null primary key,
nombre_completo VARCHAR(30) NOT NULL,
email VARCHAR(30) NOT NULL UNIQUE,
telefono VARCHAR(30) UNIQUE,
contrasena VARCHAR(30) NOT NULL
);

create table estudiante(
id_estudiante INT not null,
nombre_completo VARCHAR(30) NOT NULL,
email VARCHAR(30) NOT NULL UNIQUE,
telefono VARCHAR(30) UNIQUE,
FOREIGN KEY (id_estudiante) REFERENCES usuario(id_nodo) 
	ON UPDATE CASCADE ON DELETE RESTRICT
);

create table foro(
id_foro INT not null auto_increment primary key,
nombre VARCHAR(20) NOT NULL,
descripcion TEXT NOT NULL,
fecha_creacion DATE NOT NULL,
fecha_terminacion DATE,
id_info int not null,
	FOREIGN KEY (id_info) REFERENCES info_curso(id_info)
	ON UPDATE CASCADE ON DELETE RESTRICT
);

create table mensaje(
id_mensaje INT not null auto_increment primary key,
nombre VARCHAR(20) NOT NULL,
descripcion TEXT NOT NULL
);

create table curso(
id_curso int not null auto_increment primary key,
nombre varchar(50),
url VARCHAR(100) UNIQUE NOT NULL,
precio MEDIUMINT
);

create table info_curso(
id_info int not null auto_increment primary key,
categoria VARCHAR (20) ,
fecha_inicio DATE,
fecha_fin DATE,
año YEAR NOT NULL,
semestre TINYINT NOT NULL,
id_curso int not null,
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso) 
	ON UPDATE CASCADE ON DELETE RESTRICT
);

create table registro_user(
id_registro_user int not null auto_increment primary key,
fecha_registro DATE NOT NULL,
id_nodo INT not null,
id_curso int not null,
    FOREIGN KEY (id_nodo) REFERENCES usuario (id_nodo)
    ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_curso) REFERENCES curso (id_curso)
    ON UPDATE CASCADE ON DELETE RESTRICT
);

create table registro_estu(
id_registro int not null auto_increment primary key,
fecha_registro DATE NOT NULL,
id_curso int not null,
id_info int not null,
id_estudiante int not null,
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
    ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_estudiante) REFERENCES estudiante (id_estudiante)
	ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_info) REFERENCES info_curso(id_info)
);


create table matricula(
id_matricula int not null auto_increment primary key,
contrasena VARCHAR(30) NOT NULL,
id_nodo INT not null,
id_admin INT not null,
    FOREIGN KEY (id_nodo) REFERENCES usuario (id_nodo)
    ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_admin) REFERENCES administrador (id_admin)
	ON UPDATE CASCADE ON DELETE RESTRICT
);

create table tarea(
id_tarea int not null auto_increment primary key,
nombre_tarea VARCHAR(30) NOT NULL,
descripcion TEXT NOT NULL,
fecha_creacion DATE NOT NULL,
fecha_entrega DATE NOT NULL,
puntaje NUMERIC(2,0) NOT NULL,
archivo VARCHAR(30) NOT NULL,
doc_id VARCHAR(12) not null,
id_curso int not null,
id_info int not null,
    FOREIGN KEY (doc_id) REFERENCES profesor (doc_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_curso) REFERENCES curso (id_curso)
    ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (id_info) REFERENCES info_curso (id_info)
    ON UPDATE CASCADE ON DELETE RESTRICT
);

create table material(
id_archivo int not null auto_increment primary key,
nombre_archivo VARCHAR(30) NOT NULL,
descripcion TEXT NOT NULL,
fecha_creacion DATE NOT NULL,
id_info int not null,
id_curso int not null,
puntaje NUMERIC(2,0) NOT NULL,
doc_id VARCHAR(12) not null,
    FOREIGN KEY (doc_id) REFERENCES profesor (doc_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_info) REFERENCES info_curso (id_info)
    ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (id_curso) REFERENCES curso (id_curso)
    ON UPDATE CASCADE ON DELETE RESTRICT
    
);

create table profesor_mensaje(
hora_mensaje TIME NOT NULL,
id_replica INT,
doc_id VARCHAR(12) not null,
id_mensaje INT not null,
primary key(id_mensaje),
    FOREIGN KEY (doc_id) REFERENCES profesor(doc_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_mensaje) REFERENCES mensaje(id_mensaje)
    ON UPDATE CASCADE ON DELETE RESTRICT
);


create table estudiante_mensaje(
hora_mensaje TIME NOT NULL,
id_replica INT,
id_mensaje INT not null,
id_estudiante INT not null,
primary key(id_mensaje),
    FOREIGN KEY (id_estudiante) REFERENCES estudiante (id_estudiante)
	ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_mensaje) REFERENCES mensaje(id_mensaje)
    ON UPDATE CASCADE ON DELETE RESTRICT
);

create table mensaje_foro(
id_foro INT not null,
id_mensaje INT not null,
primary key(id_mensaje),
	FOREIGN KEY (id_foro) REFERENCES foro (id_foro)
    ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_mensaje) REFERENCES mensaje (id_mensaje)
    ON UPDATE CASCADE ON DELETE RESTRICT
);

create table foro_profesor(
doc_id VARCHAR(12) not null,
id_foro INT not null,
primary key(id_foro),
FOREIGN KEY (doc_id) REFERENCES profesor (doc_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
FOREIGN KEY (id_foro) REFERENCES foro(id_foro)
    ON UPDATE CASCADE ON DELETE RESTRICT
);

create table profesor_curso(
año YEAR NOT NULL,
semestre TINYINT NOT NULL,
id_curso int not null primary key,
doc_id VARCHAR(12) not null,
FOREIGN KEY (doc_id) REFERENCES profesor(doc_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
    ON UPDATE CASCADE ON DELETE RESTRICT
);

create user "dbuser"@"%" identified with mysql_native_password BY "Eafit2023.";

grant all privileges on nodo_entrega3.* to "dbuser"@"%";
flush privileges;

insert into usuario(ref_bancaria) values('13457');
insert into usuario(ref_bancaria) values('23456');
insert into usuario(ref_bancaria) values('33455');
insert into usuario(ref_bancaria) values('43454');
insert into usuario(ref_bancaria) values('53453');
insert into usuario(ref_bancaria) values('63452');
insert into usuario(ref_bancaria) values('73451');

select * from usuario;

insert into estudiante(id_estudiante, nombre_completo, email, telefono) values (1, 'sara cortes manrique', 'svcortesm@gmail.com', '1234567890');
insert into estudiante(id_estudiante, nombre_completo, email, telefono) values (2, 'manuela castaño franco', 'manucastano@gmail.com', '1234567891');
insert into estudiante(id_estudiante, nombre_completo, email, telefono) values (3, 'emanuel gomez urrutia', 'manuelurru@gmail.com', '1234567892');
insert into estudiante(id_estudiante, nombre_completo, email, telefono) values (4, 'valentina rodriguez ocampo', 'valocampo@gmail.com', '1234567893');
insert into estudiante(id_estudiante, nombre_completo, email, telefono) values (5, 'sofia prado puerta', 'sppuerta@gmail.com', '1234567894');

select* from estudiante;

insert into curso(nombre, url, precio) values('Fundamento de Programacion','www.curso1.com', 100000);
insert into curso(nombre, url, precio) values('Biologia','www.curso2.com', 200000);
insert into curso(nombre, url, precio) values('Contabilidad 1','www.curso3.com', 300000);
insert into curso(nombre, url, precio) values('Bases de Datos','www.curso4.com', 400000);
insert into curso(nombre, url, precio) values('Historia','www.curso5.com', 500000);

insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2022-02-03', 1, 2, 1);
insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2022-02-03', 1, 1, 1);
insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2023-02-04', 2, 1, 2);
insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2022-02-05', 3, 2, 3);
insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2023-02-06', 4, 2, 4);
insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2022-02-10', 5, 3, 6);
insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2023-01-08', 2, 3, 2);
insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2022-02-11', 1, 4, 1);
insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2023-03-12', 3, 4, 3);
insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2022-01-06', 4, 5, 5);
insert into registro_estu(fecha_registro, id_curso, id_estudiante, id_info) values('2023-02-15', 5, 5, 7);

select* from registro_estu;

insert into profesor(doc_id, nombre_completo, email,telefono, contrasena) values('123469870', 'edwin montoya munera', 'emontoya@gmail.com', '4567890234', 'rayito23');
insert into profesor(doc_id, nombre_completo, email,telefono, contrasena) values('123469871', 'marta silvia ramirez', 'martasrami@gmail.com', '4567890235', 'nube51');
insert into profesor(doc_id, nombre_completo, email,telefono, contrasena) values('123469872', 'yoe herrera jaramillo', 'yherreraj@gmail.com', '4567890236', 'estrella45');
insert into profesor(doc_id, nombre_completo, email,telefono, contrasena) values('123469873', 'sofia camacho franco', 'scamachof@gmail.com', '4567890237', 'relampago90');


insert into registro_user(fecha_registro, id_nodo, id_curso) values('2022-01-03', 1, 1);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2023-01-03', 1, 2);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2022-01-05', 2, 3);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2023-01-06', 2, 4);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2022-01-10', 3, 5);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2023-01-01', 3, 2);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2022-01-11', 4, 1);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2023-02-12', 4, 3);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2022-01-02', 5, 4);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2023-01-15', 5, 5);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2023-01-14', 6, 2);
insert into registro_user(fecha_registro, id_nodo, id_curso) values('2023-01-17', 7, 3);


insert into info_curso(categoria, fecha_inicio, fecha_fin, año, semestre,id_curso) values('computacion',
 '2022-03-01', '2022-08-01', '2022', 1,1);
insert into info_curso(categoria, fecha_inicio, fecha_fin, año, semestre,id_curso) values('ciencias',
'2023-03-01', '2023-08-01', '2023', 1,2);
insert into info_curso(categoria, fecha_inicio, fecha_fin, año, semestre,id_curso) values('finanzas',
'2023-03-01', '2023-08-01', '2023', 1,3);
insert into info_curso(categoria, fecha_inicio, fecha_fin, año, semestre,id_curso) values('computacion',
'2023-03-01', '2023-08-01', '2023', 1,4);
insert into info_curso(categoria, fecha_inicio, fecha_fin, año, semestre,id_curso) values('computacion',
'2022-03-01', '2022-08-01', '2022', 1,4);
insert into info_curso(categoria, fecha_inicio, fecha_fin, año, semestre,id_curso) values('sociales',
'2023-03-01', '2023-08-01', '2023', 1,5);
insert into info_curso(categoria, fecha_inicio, fecha_fin, año, semestre,id_curso) values('sociales',
'2022-03-01', '2022-08-01', '2022', 1,5);
select* from info_curso;

insert into profesor_curso(año, semestre, id_curso, doc_id) values('2022', 1, 1, '123469870');
insert into profesor_curso(año, semestre, id_curso, doc_id) values('2023', 1, 2, '123469870');
insert into profesor_curso(año, semestre, id_curso, doc_id) values('2022', 1, 3, '123469871');
insert into profesor_curso(año, semestre, id_curso, doc_id) values('2023', 1, 4, '123469872');
insert into profesor_curso(año, semestre, id_curso, doc_id) values('2022', 1, 5, '123469873');
select* from profesor_curso;


insert into administrador(nombre_completo, email, contrasena) values("fernando rodriguez gutierrez", "fernando@gmail.com","adminfrg");

insert into foro(nombre, descripcion, fecha_creacion, fecha_terminacion, id_info) 
	values("noticias", "aquí se compartirá información importante sobre el curso","2022-01-16", "2022-05-31", 1);
insert into foro(nombre, descripcion, fecha_creacion, fecha_terminacion, id_info) 
	values("preguntas", "en este espacio podrán hacer preguntas sobre temas del curso y entre todos podemos ayudar","2023-02-23", "2023-04-20", 2);
insert into foro(nombre, descripcion, fecha_creacion, fecha_terminacion, id_info) 
	values("eventos", "aquí se estará publicando información sobre próximas actividades como conferencias y charlas que les podrían interesar","2023-03-25", "2022-06-01", 3);
insert into foro(nombre, descripcion, fecha_creacion, fecha_terminacion, id_info) 
	values("recursos", "en este foro cualquiera puede compartir enlaces de libros o videos útiles para el aprendizaje durante el curso","2023-01-01", "2023-05-31", 4);
insert into foro(nombre, descripcion, fecha_creacion, fecha_terminacion, id_info) 
	values("proyecto final", "pueden escribir todas sus preguntas acerca del proyecto final y se responderán en este espacio","2022-01-16", "2022-05-31", 5);    
insert into foro(nombre, descripcion, fecha_creacion, fecha_terminacion, id_info) 
	values("noticias", "aquí se compartirá información importante sobre el curso","2022-01-16", "2022-05-31", 6);
insert into foro(nombre, descripcion, fecha_creacion, fecha_terminacion, id_info) 
	values("eventos", "aquí se estará publicando información sobre próximas actividades como conferencias y charlas que les podrían interesar","2023-03-25", "2022-06-01", 7);
    
    
insert into tarea(nombre_tarea, descripcion, fecha_creacion, fecha_entrega, puntaje, archivo, doc_id, id_curso, id_info) 
	values("taller de javascript", "entregar el taller finalizado hasta antes de la media noche", "2022-04-15", "2022-04-15", "10", "taller3.js", 123469870, 1, 1);
insert into tarea(nombre_tarea, descripcion, fecha_creacion, fecha_entrega, puntaje, archivo, doc_id, id_curso, id_info) 
	values("ensayo", "subir su ensayo acerca del texto aportado", "2023-02-11", "2023-02-15", "5", "ensayo.docx", 123469870, 2, 2);
insert into tarea(nombre_tarea, descripcion, fecha_creacion, fecha_entrega, puntaje, archivo, doc_id, id_curso, id_info) 
	values("bonus", "entregar los ejercicios resueltos para una bonificación", "2022-05-10", "2022-05-15", "5", "bonus.pdf", 123469871, 3, 3);
insert into tarea(nombre_tarea, descripcion, fecha_creacion, fecha_entrega, puntaje, archivo, doc_id, id_curso, id_info)
	values("taller de repaso", "adjuntar el taller de repaso solucionado", "2023-05-10", "2022-05-15", "5", "taller.pdf", 123469872, 4, 4);
insert into tarea(nombre_tarea, descripcion, fecha_creacion, fecha_entrega, puntaje, archivo, doc_id, id_curso, id_info)
	values("taller.py", "adjuntar los ejercicios solucionados", "2022-05-10", "2022-05-15", "5", "taller.py", 123469872, 4, 5);
insert into tarea(nombre_tarea, descripcion, fecha_creacion, fecha_entrega, puntaje, archivo, doc_id, id_curso, id_info)
	values("taller de repaso", "adjuntar el taller de repaso solucionado", "2022-05-10", "2022-05-15", "5", "taller.pdf", 123469873, 5, 6);
insert into tarea(nombre_tarea, descripcion, fecha_creacion, fecha_entrega, puntaje, archivo, doc_id, id_curso, id_info)
	values("taller de repaso", "adjuntar el taller de repaso solucionado", "2022-05-10", "2022-05-15", "5", "taller.pdf", 123469873, 5, 7);
    
insert into material(nombre_archivo, descripcion, fecha_creacion, puntaje, doc_id, id_curso, id_info) 
	values("codigoejemplo.sql", "guía para la resolución del ejercicio", "2022-03-10", "5", "123469870", 1, 1);
insert into material(nombre_archivo, descripcion, fecha_creacion, puntaje, doc_id, id_curso, id_info) 
	values("libro.pdf", "libro de física", "2023-04-14", "5", "123469870", 2, 2);
insert into material(nombre_archivo, descripcion, fecha_creacion, puntaje, doc_id, id_curso, id_info) 
	values("ventas.xlsx", "registro de ventas", "2023-05-20", "5", "123469871", 3, 3);
insert into material(nombre_archivo, descripcion, fecha_creacion, puntaje, doc_id, id_curso, id_info) 
	values("ejercicio.py", "taller 1", "2023-06-04", "5", "123469872", 4, 4);
insert into material(nombre_archivo, descripcion, fecha_creacion, puntaje, doc_id, id_curso, id_info) 
	values("taller.java", "taller 2", "2022-07-13", "5", "123469872", 4, 5);
insert into material(nombre_archivo, descripcion, fecha_creacion, puntaje, doc_id, id_curso, id_info) 
	values("diapositivas.pdf", "presentación del tema nuevo", "2023-03-18", "5", "123469873", 5, 6);
insert into material(nombre_archivo, descripcion, fecha_creacion, puntaje, doc_id, id_curso, id_info) 
	values("documento.docx", "lectura para la próxima sesión", "2022-04-01", "5", "123469873", 5, 7);
    
    
insert into mensaje(nombre, descripcion) values ('saludo', 'bienvenidos estudiantes al curso!');
insert into mensaje(nombre, descripcion) values ('saludo', 'hola profe!');
insert into mensaje(nombre, descripcion) values ('retraso', 'hay trafico, me demoro en llegar');
insert into mensaje(nombre, descripcion) values ('duda', 'profe, hasta que dia hay plazo de entregar el proyecto?');
insert into mensaje(nombre, descripcion) values ('notas', 'ya subi las notas de cada uno a la plataforma');

select* from mensaje;

insert into profesor_mensaje(hora_mensaje, doc_id, id_mensaje) values('09:30', '123469870', 1); 
insert into profesor_mensaje(hora_mensaje, doc_id, id_mensaje) values('9:15', '123469870', 3);
insert into profesor_mensaje(hora_mensaje, doc_id, id_mensaje) values('14:00', '123469870',5);

insert into estudiante_mensaje(hora_mensaje, id_replica, id_mensaje, id_estudiante) values('10:00', 1, 2, 1);
insert into estudiante_mensaje(hora_mensaje,id_mensaje, id_estudiante) values('13:00', 4, 2);

insert into mensaje_foro(id_foro, id_mensaje) values(1, 1);
insert into mensaje_foro(id_foro, id_mensaje) values(1, 2);
insert into mensaje_foro(id_foro, id_mensaje) values(1, 3);
insert into mensaje_foro(id_foro, id_mensaje) values(1, 4);
insert into mensaje_foro(id_foro, id_mensaje) values(1, 5);
