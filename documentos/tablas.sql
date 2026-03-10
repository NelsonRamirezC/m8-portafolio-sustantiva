CREATE TABLE Usuarios(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    fecha_nacimiento DATE NOT NULL,
    nickname VARCHAR(50) NOT NULL UNIQUE,
    admin BOOLEAN NOT NULL DEFAULT false
);

alter table usuarios add password VARCHAR(50) not null default '123456';