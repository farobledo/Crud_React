CREATE TABLE contactos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellidos VARCHAR(50) NOT NULL,
  correo VARCHAR(100),
  telefono VARCHAR(20),
  celular VARCHAR(20),
  direccion VARCHAR(200)
);

CREATE TABLE grupos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL
);

CREATE TABLE contactos_grupos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_contacto INT NOT NULL,
  id_grupo INT NOT NULL,
  FOREIGN KEY (id_contacto) REFERENCES contactos(id),
  FOREIGN KEY (id_grupo) REFERENCES grupos(id)
);

CREATE TABLE notas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_contacto INT NOT NULL,
  nota TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_contacto) REFERENCES contactos(id)
);
