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

server.get("/games", (req, res) => {
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
