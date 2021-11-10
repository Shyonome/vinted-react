import { useParams } from "react-router-dom";

const Offer = () => {

    const { offerId } = useParams();

    return (
        <div>
            Offer Page
        </div>
    );
}

export default Offer;