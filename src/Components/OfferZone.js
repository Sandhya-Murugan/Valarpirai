import offer from "../Assets/Offer.json"
import {Carousel} from "antd";

const OfferZone = () => {
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

                <Carousel style={{color:"red"}} dotPosition="top" autoplay={true} >
                    {imagesToRender.map((imageData, index) => (
                        <div key={index}>
                            <img src={imageData.basePath + imageData.filename} alt={imageData.title} style={{height:"500px", width:"100%", aspectRatio: `${imageAspectRatio}`}}/>
                        </div>
                    ))}
                </Carousel>

        </div>
    )
}

export default OfferZone;