import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );
      Cookies.set("UserPass", response.data.token, {
        expires: 30,
      });
      console.log(response.data);
      setData(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div>
        Sign Up Page
        <Link to="/">Go to home</Link>
      </div>

      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
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
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Signup;
