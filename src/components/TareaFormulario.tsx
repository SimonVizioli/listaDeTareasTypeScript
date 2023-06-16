import React, { useState } from "react";
import "../hojas-de-estilo/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";
import { ITarea } from "./interfaceTarea";

interface IProps {
    onSubmit: (tarea: ITarea) => void;
}

const TareaFormulario: React.FC<IProps> = (props) => {
    const [input, setInput] = useState("");

    const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false,
        };
        props.onSubmit(tareaNueva);
    };

    return (
        <form
            className="tarea-formulario"
            onSubmit={(event) => manejarEnvio(event)}
        >
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={(event) => manejarCambio(event)}
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    );
};
export default TareaFormulario;
