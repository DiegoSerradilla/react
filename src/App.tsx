import { useState } from "react";
import PanelUsuario from "./components/PanelUsuario";

function App() {
  const [contador, setContador] = useState(0);

  interface Servidor {
    ip: string;
    puerto: number;
    estado: string;
  }

  interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
  }

  const [servidor, setServidor] = useState<Servidor | null>(null);

  const [edicionServidor, setEdicionServidor] = useState<Partial<Servidor>>({});

  const [tareas, setTareas] = useState<Tarea[]>([
    {
      id: 1,
      titulo: "Aprender React",
      completada: false,
    },
    {
      id: 2,
      titulo: "Aprender TypeScript",
      completada: true,
    },
  ]);

  const [nombre, setNombre] = useState("");

  const [nuevaTarea, setNuevaTarea] = useState("");

  return (
    <div>
      <h1>Mi proyecto React con TypeScript</h1>

      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <p>Nombre escrito: {nombre}</p>

      <input
        type="text"
        placeholder="Nueva tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />

      <button
        onClick={() => {
          const tareaNueva: Tarea = {
            id: tareas.length + 1,
            titulo: nuevaTarea,
            completada: false,
          };

          setTareas([...tareas, tareaNueva]);
          setNuevaTarea("");
        }}
      >
        Añadir tarea
      </button>

      <PanelUsuario usuario="Diego" edad={22} />

      <PanelUsuario usuario="Lucía" edad={28} />

      <p>Contador: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>Aumentar</button>

      <button
        onClick={() =>
          setEdicionServidor({
            estado: "Mantenimiento",
          })
        }
      >
        Editar estado
      </button>
      <button
        onClick={() =>
          setServidor({
            ip: "192.168.1.1",
            puerto: 3000,
            estado: "Activo",
          })
        }
      >
        Cargar servidor
      </button>

      {servidor && (
        <div>
          <h2>Servidor cargado</h2>
          <p>IP: {servidor.ip}</p>
          <p>Puerto: {servidor.puerto}</p>
          <p>Estado: {servidor.estado}</p>
        </div>
      )}

      <p>
        Estado temporal:
        {edicionServidor.estado}
      </p>

      <h2>Lista de tareas</h2>

      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <p>{tarea.titulo}</p>
          <p>{tarea.completada ? "Completada" : "Pendiente"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
