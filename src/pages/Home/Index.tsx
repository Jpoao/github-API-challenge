import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Desafio GitHub API</h1>
      <h4>Bootcamp Spring React - DevSuperior</h4>
      <div className="button-container">
        <Link to="/search">
          <button className="btn btn-primary">Começar</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
