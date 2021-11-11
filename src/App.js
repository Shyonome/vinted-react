import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/base/Header";
import Home from "./components/Home";
import Offer from "./components/Offer";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="offer/:offerId" element={<Offer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
