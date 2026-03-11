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


create table Productos(
	id SERIAL primary key,
	nombre varchar(255) not null,
	precio NUMERIC(11,2) not null default 9999999 check(precio > 0),
	stock INTEGER not null default 0 check(stock >=0),
	imagen text not null default 'https://placehold.co/600x400'
);


INSERT into productos(nombre, precio, stock) values
('Televisor Samsung 50 Pulgadas', 250000, 250),
('Televisor LG 50 Pulgadas', 230000, 200);

