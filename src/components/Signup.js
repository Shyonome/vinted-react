import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const Signup = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup"
      );
      setData(response.data);
      setIsLoading(false);
      console.log("YES");
    } catch (error) {
      console.log(error.message);
    }
  };

  {
    /* useEffect(() => {
    const fetchData = async (event) => {
      try {
          event.preventDefault();
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);*/
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div>
        Sign Up Page
        <Link to="/">Go to home</Link>
      </div>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
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
