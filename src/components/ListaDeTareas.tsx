import React, { useState } from "react";
import "../hojas-de-estilo/ListaDeTareas.css";
import Tarea from "./Tarea";
import { ITarea } from "./interfaceTarea";
import TareaFormulario from "./TareaFormulario";

const ListaDeTareas: React.FC = () => {
    const [tareas, setTareas] = useState<Array<ITarea>>([]);

    const agregarTarea = (tarea: ITarea) => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = (id: string) => {
        const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = (id: string) => {
        const tareasActualizadas = tareas.map((tarea) => {
            if (tarea.id == id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {tareas.map((tarea) => (
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                    />
                ))}
            </div>
        </>
    );
};

export default ListaDeTareas;
