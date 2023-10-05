import React from 'react';
import {useLocation} from "react-router-dom";
import '../App.css'
import {useSelector} from "react-redux";
const ProductDetail = () => {
    const selectedCard = useSelector((state) => state.selectedCard);

    if (!selectedCard) {
        // Handle the case where there's no selected card
        return <div>No card selected</div>;
    }

    // Render the details of the selected card here
    return (
        <div>
            <h1>Product Details</h1>
            <p>Name: {selectedCard.name}</p>
            <p>Description: {selectedCard.sDescp}</p>
            <img src={selectedCard.filePath} alt={selectedCard.name} />
            {/* Add more details as needed */}
        </div>
    );
};

export default ProductDetail;
