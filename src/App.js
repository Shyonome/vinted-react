import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Offer from "./components/Offer";

function App() {
    return (
      <div>
        <Router>
          
          
          <Routes>
          
            <Route path = "/" element = { <Home/> } />
            <Route path = "offer/:offerId" element = { <Offer/> } />
          
          </Routes>
        
        </Router>
      </div>
    );
}

export default App;
