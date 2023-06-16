import ListaDeTareas from "./components/ListaDeTareas";
import "./App.css";

function App() {
    return (
        <>
            <div className="aplicacion-tareas">
                <div className="tareas-lista-principal">
                    <h1>Mis Tareas</h1>
                    <ListaDeTareas />
                </div>
            </div>
        </>
    );
}

export default App;
