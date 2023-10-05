import React, {useRef} from 'react';
import {Card, Col, Carousel, Alert} from 'antd';
import {Link} from "react-router-dom";
import AskQuery from "./AskQuery";
import "../App.css"
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import { selectCard } from '../action';

const { Meta } = Card;



const MyCards = ({jsonData}) => {

    console.log("productListPage")
    console.log(jsonData)
    const responsiveSettings = [
        {
            breakpoint:400, // Define your mobile breakpoint here (e.g., 768px)
            settings: {
                slidesToShow: 2, // Show 1 card at a time on mobile
                slidesToScroll: 1, // Scroll 1 card at a time on mobile
            },
        },
        {
            breakpoint: 992, // Define your tablet breakpoint here (e.g., 992px)
            settings: {
                slidesToShow: 3, // Show 3 cards at a time on tablets
                slidesToScroll: 1, // Scroll 3 cards at a time on tablets
            },
        },
        {
            breakpoint: 2000, // Define your larger screen breakpoint here (e.g., 1200px)
            settings: {
                slidesToShow: 5, // Show 5 cards at a time on larger screens
                slidesToScroll: 1, // Scroll 5 cards at a time on larger screens
            },
        },
    ];

    const imageAspectRatio = 16 / 12;

    const carouselRef = useRef();

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };


    const dispatch = useDispatch();
    const handleCardClick = (card) => {
        dispatch(selectCard(card));
        // You can also navigate to the ProductDetails page programmatically here
    }

    return (
        <div>
            <Carousel  responsive={responsiveSettings} dotPosition="none" ref={carouselRef}>
                {jsonData.map((card,id) => (

                    <Col key={id} xs={23} sm={20} md={20} lg={20}>
                        <Link  to={`/productDetails`}
                        >

                            <Card
                                onClick={() => handleCardClick(card)}
                                hoverable
                                style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                                cover={
                                    <img style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%',
                                        aspectRatio: `${imageAspectRatio}`,
                                    }} alt={card.name} src={card.filePath} />
                                }
                            >

                                <div style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                                    <div>
                                        <Meta title={card.name} description={card.sDescp} />
                                    </div>
                                    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                        <AskQuery title={card.title} description={card.sDescp} />
                                    </div>
                                </div>
                            </Card>
                        {/*<Alert message={card}></Alert>*/}
                        </Link>
                    </Col>
                ))}
            </Carousel>
            <div className="carousel-buttons">
                <LeftOutlined className="prev-button" onClick={handlePrev} />

                <RightOutlined className="next-button" onClick={handleNext}/>


            </div>


        </div>

    );
};

export default MyCards;
