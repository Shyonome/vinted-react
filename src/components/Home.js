import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div>Home Page</div>

      {data.offers.map((elem, index) => {
        return (
          <div className="main" key={index}>
            <Link to={`/offer/${elem._id}`}>
              <div className="main-offers">
                {
                  <img
                    className="main-offers-img"
                    src={elem.product_image.secure_url}
                    alt=""
                  />
                }
              </div>

              <div>{elem.product_price}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
