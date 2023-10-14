import React, {useRef} from 'react';
import {Card, Col, Carousel, Alert, Row, Button} from 'antd';
import {Link} from "react-router-dom";
import AskQuery from "./AskQuery";
import "../App.css"
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import { selectProductCard } from '../action';
import BrandsAvailableModal from "./BrandsAvailableModal";

const { Meta } = Card;



const MyCards = ({jsonData}) => {

    // console.log("productListPage")
    // console.log(jsonData)
    // const responsiveSettings = [
    //     {
    //         breakpoint:400, // Define your mobile breakpoint here (e.g., 768px)
    //         settings: {
    //             slidesToShow: 2, // Show 1 card at a time on mobile
    //             slidesToScroll: 1, // Scroll 1 card at a time on mobile
    //         },
    //     },
    //     {
    //         breakpoint: 992, // Define your tablet breakpoint here (e.g., 992px)
    //         settings: {
    //             slidesToShow: 3, // Show 3 cards at a time on tablets
    //             slidesToScroll: 3, // Scroll 3 cards at a time on tablets
    //         },
    //     },
    //     {
    //         breakpoint: 2000, // Define your larger screen breakpoint here (e.g., 1200px)
    //         settings: {
    //             slidesToShow: 5, // Show 5 cards at a time on larger screens
    //             slidesToScroll: 3, // Scroll 5 cards at a time on larger screens
    //         },
    //     },
    // ];

    const imageAspectRatio = 2/2;

    // const carouselRef = useRef();

    // const handlePrev = () => {
    //     if (carouselRef.current) {
    //         carouselRef.current.prev();
    //     }
    // };
    //
    // const handleNext = () => {
    //     if (carouselRef.current) {
    //         carouselRef.current.next();
    //     }
    // };


    // const dispatch = useDispatch();
    // const handleCardClick = (card) => {
        // dispatch(selectProductCard(card));
        // window.location.href='/productDetails'
        // You can also navigate to the ProductDetails page programmatically here
    // }

    return (
//         <div style={{}}>
//             <Carousel  responsive={responsiveSettings} dotPosition="none" ref={carouselRef}>
//                 {jsonData.map((card,id) => {
//                     const discountPrice = (card.discountedPercent / 100) * card.actualPrice;
//                     const discountedPrice = card.actualPrice - discountPrice;
//                     return (
//                         <Row gutter = {[16,16]}>
//                             <Col key={id} xs={12} sm={12} md={8} lg={8}>
//                                 {/*<Link to={`/productDetails`}/>*/}
//
//                                 <Card
//                                     onClick={() => handleCardClick(card)}
//                                     hoverable
//                                     style={{
//                                         padding:"1%",
//                                         minHeight: '300px',
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         justifyContent: 'space-between'
//                                     }}
//                                     cover={
//                                         <img style={{
//                                             objectFit: 'contain',
//                                             height: '100%',
//                                             width: '100%',
//                                             aspectRatio: `${imageAspectRatio}`,
//                                         }} alt={card.CategoryName} src={card.CategoryImage}/>
//                                     }
//                                     actions={
//                                         [
//                                             <div style={{textAlign:"center"}}>
//                                                 <p className="Discounted_Price">
//                                                      <span className="Discounted_Percent">
//                                                             -{card.discountedPercent}&#37;
//                                                      </span>
//                                                     &#8377;{discountedPrice.toFixed(2)}
//                                                 </p>
//                                                 <p >
//                                                     <span> M.R.P:
//                                                         <span className="Actual_Price">
//                                                             &#8377;{card.actualPrice}
//                                                         </span>
//                                                     </span>
//                                                 </p>
//                                             </div>
//                                         ]
//                                     }
//
//                                 >
//                                     <div style={{padding: '10px', display: 'flex', justifyContent: 'center', textAlign:'center'}}>
//                                         <div className="card-content">
//                                             <Meta title={card.name}/>
//                                             <p className="ellipsis-description">
//                                                 {card.sDescp}
//                                             </p>
//                                             <div style={{textAlign:"center"}}>
//                                                 <AskQuery title={card.title} description={card.sDescp}/>
//                                             </div>
//                                         </div>
//
//                                     </div>
//
//                                 </Card>
//                                 {/*</Link>*/}
//                             </Col>
//                         </Row>
//
//                     )
//
//                 })}
//             </Carousel>
//             <div className="carousel-buttons">
//                 <LeftOutlined className="prev-button" onClick={handlePrev} />
//
//                 <RightOutlined className="next-button" onClick={handleNext}/>
//             </div>
// <br/>
//         </div>

        <div style={{padding:"2%"}}>
            <Row gutter = {[20,20]}>
                {jsonData.map((card,id) => {
                 return(
                        <Col key={id} xs={24} sm={12} md={8} lg={4}>
                            <Card
                                // onClick={() => handleCardClick(card)}
                                // hoverable
                                style={{
                                    padding:"1%",
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
                                    }} alt={card.CategoryName} src={card.CategoryImage}/>
                                }
                                // actions={
                                //     [
                                //         <div>
                                //             <BrandsAvailableModal data1 = {card.CategoryBrandsAvailableBasePath}
                                //                                   data2 = {card.CategoryBrandsAvailable}
                                //             />
                                //             {/*<AskQuery />*/}
                                //         </div>
                                //
                                //     ]
                                // }
                            >

                                <div
                                    className="product-name"
                                    style={{textAlign:"center"}}
                                    >
                                    <h4 style={{textTransform: "uppercase"}}>{card.CategoryName}</h4>
                                </div>
                                <div style={{textAlign:"center"}}>
                                    <BrandsAvailableModal data1 = {card.CategoryBrandsAvailableBasePath}
                                                          data2 = {card.CategoryBrandsAvailable}
                                    />
                                    {/*<AskQuery />*/}
                                </div>

                            </Card>
                        </Col>
                )
                })}
            </Row>
        </div>

    );
};

export default MyCards;