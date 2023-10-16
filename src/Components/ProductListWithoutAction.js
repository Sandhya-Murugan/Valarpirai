import React, {useRef} from 'react';
import {Card, Col, Carousel, Alert, Row, Button} from 'antd';
import "../App.css"
import BrandsAvailableModal from "./BrandsAvailableModal";

const { Meta } = Card;



const ProductListWithoutAction = ({jsonData}) => {


    const imageAspectRatio = 2/2;


    return (
        <div style={{padding:"0 2% 2% 2%"}}>
            <Row gutter = {[24,24]}>
                {jsonData.map((card,id) => {
                    return(
                        <Col key={id} xs={24} sm={12} md={8} lg={4}>
                            <Card
                                // hoverable
                                style={{
                                    padding:"1%",
                                    // height:"400px",
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
                                    }} alt={card.Name} src={card.Image}/>
                                }
                            >

                                <div className="title-font" style={{textAlign:"center"}}>
                                    <h4 style={{textTransform: "capitalize"}}>{card.Name}</h4>
                                </div>

                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>

    );
};

export default ProductListWithoutAction;