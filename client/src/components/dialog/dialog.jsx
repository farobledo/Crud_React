import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import axios from "axios";
import "../../components/card.css"

export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        nombre: props.nombre,
        apellidos: props.apellidos,
        correo: props.correo,
        telefono: props.telefono,
        celular: props.celular,
        direccion: props.direccion,
    });


    const handleEditValues = () => {
        console.log(props.baseUrl)
        axios.put(`http://localhost:3001/edit`, {
            id: editValues.id,
            nombre: editValues.nombre,
            apellidos: editValues.apellidos,
            correo: editValues.correo,
            telefono: editValues.telefono,
            celular: editValues.celular,
            direccion: editValues.direccion,
        });
        handleClose();

    }

    const handleDeleteGame = () => {
        axios.delete(`http://localhost:3001/delete/${editValues.id}`)
    }

    const handleChangeValues = (value)=>{
        setEditValues(prevValues=>({
                ...prevValues,
                [value.target.id]: value.target.value,
            })
        )
    }

    const handleClickOpen = () => {
        props.setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
         
         // vamos a traer la inforamcion en una table 
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Editar</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nombre"
                        label="Nombre"
                        type="text"
                        fullWidth
                        defaultValue={props.nombre}
                        onChange={handleChangeValues}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="apellidos"
                        label="Apellidos"
                        type="text"
                        fullWidth
                        defaultValue={props.apellidos}
                        onChange={handleChangeValues}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="correo"
                        label="Correo"
                        type="text"
                        fullWidth
                        defaultValue={props.correo}
                        onChange={handleChangeValues}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="telefono"
                        label="Telefono"
                        type="text"
                        fullWidth
                        defaultValue={props.telefono}
                        onChange={handleChangeValues}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="celular"
                        label="Celular"
                        type="text"
                        fullWidth
                        defaultValue={props.celular}
                        onChange={handleChangeValues}
                    />
                    <TextField
                        autoFocus       
                        margin="dense"
                        id="direccion"
                        label="Direccion"
                        type="text"
                        fullWidth
                        defaultValue={props.direccion}
                        onChange={handleChangeValues}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleEditValues}>Enviar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

