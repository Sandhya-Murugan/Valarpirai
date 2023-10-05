import imageJSONData from "./data.json";
import React from "react";


const jsonDisplaying = () => {


    const imagesToRender = [];

    const offer = imageJSONData[0].offer
// console.log(offer)

    for (let i = 1; i <= offer.count; i++) {
        // console.log(offer)
        // change filename as offer_1
        const filename = `${offer.fileName}${i}${offer.fileFormat}`;
        // console.log(filename)
        imagesToRender.push({
            title: `Offer ${i}`,
            basePath: offer.basePath,
            filename: filename,
        });
    }
    return(
        <div>
            {imagesToRender.map((imageData, index) => (
                <div key={index}>
                    <h2>{imageData.title}</h2>
                    <img src={imageData.basePath + imageData.filename} alt={imageData.title} />
                </div>
            ))}
        </div>
    )
}

export default jsonDisplaying