import { Link } from "react-router-dom";
import Header from "./base/Header";

const Home = ({ data }) => {

    console.log(data.offers)

    return (
        <div>
            
            <Header />
        
            <div>
                Home Page
                <Link to = "/offer/1" >Go to offers</Link>
            </div>

            {data.offers.map((elem, index) => {
                return (
                    <div className = "main" key = {index} >
                        
                        <Link to = {`/offer/${elem._id}`} >
                            
                            <div className = "main-offers" >

                                {<img className = "main-offers-img" src = {elem.product_image.secure_url} alt="" />}

                            </div>

                            <div>
                                {elem.product_price}
                            </div>
                        
                        </Link>

                    </div>
                )
            })}
        
        </div>
    );
}

export default Home;