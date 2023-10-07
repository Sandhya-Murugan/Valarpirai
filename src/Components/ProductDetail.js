import React from 'react';
import '../App.css'
import {useSelector} from "react-redux";
import {Carousel} from "antd";
const ProductDetail = () => {
    const selectedProductCard = useSelector((state) => state.selectedProductCard);
    const imagesToRender = [];

    if (!selectedProductCard) {
        // Handle the case where there's no selected card
        return <div>No card selected</div>;
    }
    const relatedImages = [];
    for (let i = 1; i <= selectedProductCard.relatedImageCount; i++) {
        const filePath = `/Images/table/table_1/table_1_${i}.jpeg`
        // const filePath = `${selectedProductCard.filePath}/${selectedProductCard.name}_${i}.jpeg`;
        console.log(filePath)
        relatedImages.push(filePath);
    }

    const imageAspectRatio = 8 / 6;
    // Render the details of the selected card here
    return (
        <div>
            <h1>Product Details</h1>
            <p>Name: {selectedProductCard.name}</p>
            <p>Description: {selectedProductCard.sDescp}</p>
            <img src={selectedProductCard.filePath} alt={selectedProductCard.name} />
            {/* Add more details as needed */}
            {/* Render related images */}
            <h2>Related Images</h2>
            {/*<Carousel autoplay={true} dotPosition={"top"}  >*/}
                {relatedImages.map((filePath, index) => (
                    <img key={index} src={filePath} alt={`Related ${index + 1}`} height="200px" width="100px" style={{aspectRatio:`${imageAspectRatio}`}}/>
                ))}
            {/*</Carousel>*/}

        </div>
    );
};

export default ProductDetail;
