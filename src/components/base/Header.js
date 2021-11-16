import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const cookie = Cookies.get("UserPass");

  const [data, setData] = useState();

  const [title, setTitle] = useState("");

  const [priceMin, setPriceMin] = useState("");

  const [priceMax, setPriceMax] = useState("");

  const [sort, setSort] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let filters = "";
        if (title) {
          filters = filters + `title=${title}`;
        }
        if (priceMin) {
          if (filters) {
            filters = filters + "&";
          }
          filters = filters + `priceMin=${priceMin}`;
        }
        if (priceMax) {
          if (filters) {
            filters = filters + "&";
          }
          filters = filters + `priceMax=${priceMax}`;
        }
        if (sort) {
          if (filters) {
            filters = filters + "&";
          }
          filters = filters + "sort=price-asc";
        } else {
          if (filters) {
            filters = filters + "&";
          }
          filters = filters + "sort=price-desc";
        }
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?${filters}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [title, priceMin, priceMax, sort]);

  return (
    <header>
      <input
        type="search"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        value={title}
      />

      {!cookie ? (
        <span>
          <Link to="/signup">
            <button>s'inscrire</button>
          </Link>

          <Link to="/login">
            <button>se connecter</button>
          </Link>

          <Link to="/login">
            <button>vends tes articles</button>
          </Link>
        </span>
      ) : (
        <span>
          <button
            onClick={() => {
              Cookies.remove("UserPass");
              navigate("/");
            }}
          >
            se déconnecter
          </button>

          <Link to="/publish">
            <button>vends tes articles</button>
          </Link>
        </span>
      )}

      <div>
        <span>Trié par: </span>
        <input
          type="checkbox"
          onClick={() => {
            setSort(!sort);
          }}
        />
        <span> Prix entre: </span>
        <input
          type="text"
          onChange={(event) => {
            setPriceMin(event.target.value);
          }}
          value={priceMin}
        />
        <input
          type="text"
          onChange={(event) => {
            setPriceMax(event.target.value);
          }}
          value={priceMax}
        />
        {/* RANGE */}
      </div>
    </header>
  );
};

export default Header;
