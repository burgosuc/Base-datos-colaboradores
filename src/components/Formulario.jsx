import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ onSubmit, setAlert }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const handleChange = (e) => {
    setColaborador({
      ...colaborador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      colaborador.nombre === "" ||
      colaborador.correo === "" ||
      colaborador.edad === "" ||
      colaborador.cargo === "" ||
      colaborador.telefono === ""
    ) {
      setAlert({
        msg: "Debe completar todos los campos 😖",
        color: "danger",
      });
      return;
    }
    setAlert({
      msg: "Agregado exitosamente 😊",
      color: "success",
    });

    onSubmit(colaborador);
    setColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  return (
    <Form className="registro" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Nombre & Apellido"
          onChange={handleChange}
          name="nombre"
          value={colaborador.nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="correo"
          value={colaborador.correo}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Edad"
          onChange={handleChange}
          name="edad"
          value={colaborador.edad}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Cargo"
          onChange={handleChange}
          name="cargo"
          value={colaborador.cargo}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Teléfono de contacto"
          onChange={handleChange}
          name="telefono"
          value={colaborador.telefono}
        />
      </Form.Group>
      <Button className="btn" type="submit">
        Agregar 
      </Button>
    </Form>
  );
};

export default Formulario;
