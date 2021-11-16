import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import "./App.css";
import Header from "./components/base/Header";
import Home from "./components/Home";
import Offer from "./components/Offer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Publish from "./components/Publish";
import Payment from "./components/Payment";

function App() {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="offer/:offerId" element={<Offer />} />
          <Route path="/publish" element={<Publish />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
