import { Link } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">
        <h1>Github Api</h1>
      </Link>
    </div>
  );
};

export default NavBar;
