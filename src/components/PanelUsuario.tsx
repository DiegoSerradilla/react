interface PanelUsuarioProps {
  usuario: string;
  edad: number;
}

function PanelUsuario({
  usuario,
  edad,
}: PanelUsuarioProps) {
  return (
    <div>
      <h2>{usuario}</h2>
      <p>Edad: {edad}</p>
    </div>
  );
}

export default PanelUsuario;