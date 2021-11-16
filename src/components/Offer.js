import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import Cookies from "js-cookie";

const Offer = () => {
  const { offerId } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const token = Cookies.get("UserPass");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${offerId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [offerId]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div>
        Offer Page
        <Link to="/">Go to home</Link>
      </div>

      <h3>{data.product_name}</h3>
      <img src={data.product_image.secure_url} alt="" />
      <ul>
        {data.product_details.map((elem, index) => {
          const keys = Object.keys(elem);
          return (
            <li key={index}>
              <span>{keys[0]}: </span>
              <span>{elem[keys[0]]}</span>
            </li>
          );
        })}
      </ul>
      {token ? (
        <button
          onClick={() => {
            navigate("/payment", {
              state: {
                buyerId: token,
                title: data.product_name,
                amount: data.product_price,
              },
            });
          }}
        >
          Acheter
        </button>
      ) : (
        <Link to="/login">
          <button>Acheter</button>
        </Link>
      )}
    </div>
  );
};

export default Offer;
