import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/card";

import { Link } from "react-router-dom";

function App() {
  const baseUrl = "http://localhost:3001";

  const [values, setValues] = useState();
  const [games, setGames] = useState();
 

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post(`${baseUrl}/register`, {
      nombre: values.nombre,
      apellidos: values.apellidos,
      correo: values.correo,
      telefono: values.telefono,
      celular: values.celular,
      direccion: values.direccion,
    }).then((response) => {
      errors = response.data;
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get(`${baseUrl}/games`).then((response) => {
      setGames(response.data);
    });
  });

  return (
    <div className="App">
      <div className="container">
        <button></button>
        <h1 className="title">Prueba Técnica</h1>
        <h3>Crear Usuario</h3>
        <div className="register-box">
          <input
            className="register-input"
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={handleChangeValues}
          />
          <input
            className="register-input"
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            onChange={handleChangeValues}
          />
          <input
            className="register-input"
            type="text"
            name="correo"
            placeholder="Correo"
            onChange={handleChangeValues}
          />
          <input
            className="register-input"
            type="text"
            name="telefono"
            placeholder="Telefono"
            onChange={handleChangeValues}
          />
          <input
            className="register-input"
            type="text"
            name="celular"
            placeholder="Celular"
            onChange={handleChangeValues}
          />
          <input
            className="register-input"
            type="text"
            name="direccion"
            placeholder="Direccion"
            onChange={handleChangeValues}
          />
          <button className="register-button" onClick={handleClickButton}>
            Enviar
          </button>
        </div>
        <br />
        <div className="cards">
          {typeof games !== "undefined" &&
            games.map((game) => {
              return (
                <Card
                  key={game.id}
                  id={game.id}
                  nombre={game.nombre}
                  apellidos={game.apellidos}
                  correo={game.correo}
                  telefono={game.telefono}
                  celular={game.celular}
                  direccion={game.direccion}
                ></Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
