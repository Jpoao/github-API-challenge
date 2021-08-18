import "./styles.css";

const Search = () => {
  return (
    <div className="search_container">
      <div className="search_top_container">
        <h1>Encontre um perfil Github</h1>
        <input
          type="text"
          name="user"
          className="search-input"
          placeholder="Usuário Github"
        />
        <div className="button_container">
          <button type="submit" className="btn btn-primary search-button">
            Encontrar
          </button>
        </div>
      </div>
      <div className="search_bottom_container"></div>
    </div>
  );
};

export default Search;
