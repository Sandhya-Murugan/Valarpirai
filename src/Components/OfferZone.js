import React from "react";
import offer from "../Assets/Offer.json"
import {Carousel} from "antd";
import "../App.css"
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const OfferZone = () => {
    const carouselRef = React.useRef();

    const goToPrev = () => {
        carouselRef.current.prev();
    };

    const goToNext = () => {
        carouselRef.current.next();
    };

    const offerData = offer[0]
    const imagesToRender = [];
    const imageAspectRatio = 8 / 6;

        for (let i = 1; i <= offerData.count; i++) {
            const filename = `${i}${offerData.fileFormat}`;
            // console.log(offerData.basePath+filename)
            imagesToRender.push({
                title: `Offer ${i}`,
                basePath: offerData.basePath,
                filename: filename,
            });
        }

    return(
        <div>
            <Carousel className="offer_zone" dots={null} autoplay={true} ref={carouselRef}>
                {imagesToRender.map((imageData, index) => (
                    <div key={index}>
                        <img className="offer_image" src={imageData.basePath + imageData.filename} alt={imageData.title} style={{aspectRatio: `${imageAspectRatio}`}}/>
                    </div>
                ))}
            </Carousel>
            <div className="carousel-buttons">
                <LeftOutlined className="prev-button" onClick={goToPrev}>Previous</LeftOutlined>
                <RightOutlined className="next-button" onClick={goToNext}>Next</RightOutlined>
            </div>
            {/*<br/>*/}

        </div>
    )
}

export default OfferZone;