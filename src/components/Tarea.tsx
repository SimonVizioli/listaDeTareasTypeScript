import React from "react";
import "../hojas-de-estilo/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ITarea } from "./interfaceTarea";

interface ITareaChildren extends ITarea {
    completarTarea: (id: string) => void;
    eliminarTarea: (id: string) => void;
}

const Tarea: React.FC<ITareaChildren> = ({
    id,
    texto,
    completada,
    completarTarea,
    eliminarTarea,
}) => {
    return (
        <div
            className={
                completada ? "tarea-contenedor completada" : "tarea-contenedor"
            }
        >
            <div className="tarea-texto" onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div
                className="tarea-contenedor-iconos"
                onClick={() => eliminarTarea(id)}
            >
                <AiOutlineCloseCircle className="tarea-icono" />
            </div>
        </div>
    );
};
export default Tarea;
