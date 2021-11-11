import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      const my_cookie = Cookies.set("UserPass", response.data.token, {
        expires: 30,
      });
      console.log(my_cookie);
      console.log(response.data);
      setData(response.data);
      navigate("/");
      console.log("all good");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div>
        Login
        <Link to="/">Go to home</Link>
      </div>

      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            fetchData();
          }}
        >
          Se connecter
        </button>
        <Link to="/signup">Pas encore de compte ? Inscrit toi !</Link>
      </form>
    </div>
  );
};

export default Login;
