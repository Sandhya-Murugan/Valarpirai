import React, {useRef} from 'react';
import {Card, Col, Carousel, Alert} from 'antd';
import {Link} from "react-router-dom";
import AskQuery from "./AskQuery";
import "../App.css"
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import { selectProductCard } from '../action';

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
                slidesToScroll: 3, // Scroll 3 cards at a time on tablets
            },
        },
        {
            breakpoint: 2000, // Define your larger screen breakpoint here (e.g., 1200px)
            settings: {
                slidesToShow: 5, // Show 5 cards at a time on larger screens
                slidesToScroll: 3, // Scroll 5 cards at a time on larger screens
            },
        },
    ];

    const imageAspectRatio = 4/3;

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
        dispatch(selectProductCard(card));
        window.location.href='/productDetails'
        // You can also navigate to the ProductDetails page programmatically here
    }

    return (
        <div style={{}}>
            <Carousel  responsive={responsiveSettings} dotPosition="none" ref={carouselRef}>
                {jsonData.map((card,id) => {
                    const discountPrice = (card.discountedPercent / 100) * card.actualPrice;
                    const discountedPrice = card.actualPrice - discountPrice;
                    return (
                        <Col key={id} xs={23} sm={20} md={22} lg={22}>
                            {/*<Link to={`/productDetails`}/>*/}

                                <Card
                                    onClick={() => handleCardClick(card)}
                                    hoverable
                                    style={{
                                        padding:"1%",
                                        minHeight: '300px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                    cover={
                                        <img style={{
                                            objectFit: 'contain',
                                            height: '100%',
                                            width: '100%',
                                            aspectRatio: `${imageAspectRatio}`,
                                        }} alt={card.name} src={card.filePath}/>
                                    }
                                    actions={
                                        [
                                            <div style={{textAlign:"center"}}>
                                                <p className="Discounted_Price">
                                                     <span className="Discounted_Percent">
                                                            -{card.discountedPercent}&#37;
                                                     </span>
                                                     &#8377;{discountedPrice.toFixed(2)}
                                                </p>
                                                <p >
                                                    <span> M.R.P:
                                                        <span className="Actual_Price">
                                                            &#8377;{card.actualPrice}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                        ]
                                    }

                                >
                                    <div style={{padding: '10px', display: 'flex', justifyContent: 'center', textAlign:'center'}}>
                                        <div className="card-content">
                                            <Meta title={card.name}/>
                                            <p className="ellipsis-description">
                                                {card.sDescp}
                                            </p>
                                            <div style={{textAlign:"center"}}>
                                                <AskQuery title={card.title} description={card.sDescp}/>
                                            </div>
                                        </div>

                                    </div>

                                </Card>
                            {/*</Link>*/}
                        </Col>
                    )

                })}
            </Carousel>
            <div className="carousel-buttons">
                <LeftOutlined className="prev-button" onClick={handlePrev} />

                <RightOutlined className="next-button" onClick={handleNext}/>


            </div>
<br/>
        </div>

    );
};

export default MyCards;