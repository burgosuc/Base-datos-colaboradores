import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BaseColaboradores } from "./data/BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import Buscador from "./components/Buscador";

function App() {
  const [alert, setAlert] = useState({ msg: "", color: "" });
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredColaboradores = colaboradores.filter((c) => {
    if (
      c.nombre.toLocaleLowerCase().includes(search.toLowerCase()) ||
      c.correo.toLocaleLowerCase().includes(search.toLowerCase()) ||
      c.edad.toLocaleLowerCase().includes(search.toLowerCase()) ||
      c.cargo.toLocaleLowerCase().includes(search.toLowerCase()) ||
      c.telefono.toLocaleLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  const handleSubmit = (nuevoColaborador) => {
    const colaboradorConId = {
      ...nuevoColaborador,
      id: colaboradores.length + 1,
    };

    setColaboradores([...colaboradores, colaboradorConId]);
  };

  const handleDelete = (id) => {
    const updateColaboradores = colaboradores.filter((c) => c.id !== id);
    setColaboradores(updateColaboradores);
  };

  return (
    <>
      <div className="contenedor">
        <div className="List">
          <h1 className="TituloPrincipal"><i class="fa-solid fa-user-group"></i> Lista de Colaboradores</h1>
          <Buscador onChange={handleChange} search={search} />
          <Listado
            colaboradores={filteredColaboradores}
            onDelete={handleDelete}
          />
        </div>
        <div className="FormAdd">
          <h3>Agregar Colaborador</h3>
          <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
          {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
        </div>
      </div>
    </>
  );
}

export default App;
