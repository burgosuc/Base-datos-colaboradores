const Buscador = ({ onChange, search }) => {
  return (
    <form className="buscar" role="search">
      <input
        className="form-control my-3"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
        value={search}
        onChange={onChange}
      />
    </form>
  );
};

export default Buscador;
