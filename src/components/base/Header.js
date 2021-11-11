import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  return (
    <header>
      <input type="search" />

      <Link to="/signup">
        <button>s'inscrire</button>
      </Link>

      <button>se connecter</button>

      <button>vends tes articles</button>
    </header>
  );
};

export default Header;
