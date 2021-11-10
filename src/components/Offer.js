import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Offer = ({  }) => {

    const { offerId } = useParams();

    return (
        <div>
            <header>
                Offer Page
            </header>
        
            <main>
                <Link to = "/" >Go to home</Link>
            </main>

            <footer>

            </footer>
        </div>
    );
}

export default Offer;