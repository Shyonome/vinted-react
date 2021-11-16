import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Payment = () => {
  const stripe = useStripe();
  const element = useElements();

  const location = useLocation();

  const { buyerId, title, amount } = location.state;

  console.log(location.state);

  const [isValid, setIsValid] = useState("");

  const checkSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = element.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: buyerId,
      });
      console.log(stripeResponse.token);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeResponse.token.id,
          title: title,
          amount: amount,
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        setIsValid("Paiement validé !");
      } else {
        setIsValid("Paiement non validé.");
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
      <div className="payment-form">
        <form onSubmit={checkSubmit}>
          <CardElement />
          <input type="submit" value="payer" />
          <span>{isValid}</span>
        </form>
      </div>
    </div>
  );
};

export default Payment;
