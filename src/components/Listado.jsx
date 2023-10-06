import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Listado = ({ colaboradores, onDelete }) => {
  return (
    <Table responsive bordered className="table-responsive-sm">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((c) => (
          <tr key={c.id}>
            <td data-label="Nombre">{c.nombre}</td>
            <td data-label="Correo">{c.correo}</td>
            <td data-label="Edad">{c.edad}</td>
            <td data-label="Cargo">{c.cargo}</td>
            <td data-label="Teléfono">{c.telefono}</td>
            <td data-label="Acciones">
              <Button variant="danger" onClick={() => onDelete(c.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
