const Buscador = ({ onChange, search }) => {
  return (
    <form className="buscar col-12 col-md-6" role="search">
      <input
        className="form-control mb-3"
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
