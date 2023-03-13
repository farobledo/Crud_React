<p align="center">
  <img src="https://logospng.org/download/react/logo-react-256.png" />
  <img src="https://logospng.org/download/node-js/logo-node-js-256.png" />
  <img src="https://logospng.org/download/mysql/mysql-256.png" />
</p>

<h1 align="center">Reactjs Node Mysql CRUD</h1>
<p align="center">CRUD made with Reactjs, Nodejs and Mysql</p>

Content Table
=================
<!--ts-->
   * [Crear Usuario](#Craer)
   * [Editar Usuario](#editar)
   * [Borrar Usuario](#delete)
<!--te-->

![image](https://user-images.githubusercontent.com/83982603/224597663-52b379ed-89e3-4a41-a9a3-e88098ead855.png)

Instalacion del project 
Framework React JavaScript
Commando: npx create-react-app Prueba_Tecnica

Base de datos: MySQL
scripts
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

CONFIGURATION DE Express Framework

const express = require("express");
const server = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "prueba",
});

server.use(express.json());
server.use(cors());

server.post("/register", (req, res) => {
  const { id } = req.body;
  const { nombre } = req.body;
  const { apellidos } = req.body;
  const { correo } = req.body;
  const { telefono } = req.body;
  const { celular } = req.body;
  const { direccion } = req.body;

  let sql =
    "INSERT INTO contactos (id, nombre, apellidos, correo, telefono, celular, direccion) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sql,
    [id, nombre, apellidos, correo, telefono, celular, direccion],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

server.get("/user", (req, res) => {
  let sql = "SELECT * FROM contactos";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

server.put("/edit", (req, res) => {
  const { id } = req.body;
  const { nombre } = req.body;
  const { apellidos } = req.body;
  const { correo } = req.body;
  const { telefono } = req.body;
  const { celular } = req.body;
  const { direccion } = req.body;

  let sql =
"UPDATE contactos SET nombre = ?, apellidos = ?, correo = ?, telefono = ?, celular = ?, direccion = ?, WHERE id = ?";
  db.query(
    sql,
    [nombre, apellidos, correo, telefono, celular, direccion, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

server.delete("/delete/:index", (req, res) => {
  const { index } = req.params;

  let sql = "DELETE FROM contactos WHERE id = ?";
  db.query(sql, [index], (err, result) => {
    err ? console.log(err) : res.send(result);
  });
});
server.listen(3001, () => console.log("Estas conectado al puerto 3001"));

para levantar el proyecto:
Commando: instalar las dependencias npm install
Commando npm run vite



