import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Payment = () => {
  const stripe = useStripe();
  const element = useElements();

  const [isValid, setIsValid] = useState("");

  const checkSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = element.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        //name: ,
      });
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeResponse.token.id,
          //title: ,
          //amount: ,
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        setIsValid("Paiement validé !");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        Offer Page
        <Link to="/">Go to home</Link>
      </div>
      <form onSubmit={checkSubmit}>
        <CardElement />
        <input type="submit" value="payer" />
        <span>{isValid}</span>
      </form>
    </div>
  );
};

export default Payment;
