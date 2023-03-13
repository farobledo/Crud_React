import React, { useState} from "react";
import "./card.css"
import FormDialog from "./dialog/dialog";
import axios from "axios";


const Card = (props) => {
    const [open, setOpen] = React.useState(false);

    const cardOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteGame = () => {
        axios.delete(`http://localhost:3001/delete/${props.id}`);
    }

    return (
        <>
        <FormDialog open={open} setOpen={setOpen} id={props.id} nombre={props.nombre} apellidos={props.apellidos} correo={props.corre} telefono={props.telefono} celular={props.celular} direcion={props.direccion} />
        <div className="game-card">
            <div className="info">
                <h4>{props.nombre}</h4>
                <p>{props.apellidos}</p>
                <p>{props.correo}</p>
                <p>{props.telefono}</p>
                <p>{props.celular}</p>
                <p>{props.direccion}</p>
            </div>
            <div className="actions">
                <button className="edit" onClick={cardOpen}>Edit</button>
                <button className="delete" onClick={handleDeleteGame}>Delete</button>
            </div>
        </div>
        </>
    );
};

export default Card;
