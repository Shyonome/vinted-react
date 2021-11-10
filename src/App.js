import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Offer from "./components/Offer";

import axios from "axios"

function App() {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get
              ("https://lereacteur-vinted-api.herokuapp.com/offers");
              console.log(response.data);
              setData(response.data);
              setIsLoading(false);
            } catch (error) {
              console.log(error.message);
            }
        };
        
        fetchData();
    }, [])

    return (
      <div>
        <Router>
          
          
          <Routes>
          
            <Route path = "/" element = { <Home  /> } />
            <Route path = "offer/:offerId" element = { <Offer  /> } />
          
          </Routes>
        
        </Router>
      </div>
    );
}

export default App;
