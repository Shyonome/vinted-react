import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const cookie = Cookies.get("UserPass");
  return (
    <header>
      <input type="search" />

      <Link to="/signup">
        <button>s'inscrire</button>
      </Link>

      {!cookie ? (
        <Link to="/login">
          <button>se connecter</button>
        </Link>
      ) : (
        <button
          onClick={() => {
            Cookies.remove("UserPass");
            navigate("/");
          }}
        >
          se déconnecter
        </button>
      )}

      <button>vends tes articles</button>
    </header>
  );
};

export default Header;
