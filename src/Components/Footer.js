import {Layout, Row, Col} from 'antd';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined,  WhatsAppOutlined} from '@ant-design/icons';
import '../App.css'
const { Footer } = Layout;


const AppFooter = () => {
    const handleWhatsAppClick = () => {
        // Replace the placeholder number with your WhatsApp number
        window.open('https://wa.me/7402413714', '_blank');
    };

    return (
        <div>
            <Footer
                id="app-footer"
                style={{ textAlign: "center", backgroundColor:"none", bottom: 0, width: '100%', }}>

                <Row>
                    <Col span={24}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FacebookOutlined style={{ fontSize: "24px", margin: "0 8px", color:"#000" }} />
                        </a>
                        {/*<a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">*/}
                        {/*    <TwitterOutlined style={{ fontSize: "24px", margin: "0 8px", color:"#000"}} />*/}
                        {/*</a>*/}
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <InstagramOutlined style={{ fontSize: "24px", margin: "0 8px", color:"#000" }} />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <YoutubeOutlined style={{ fontSize: "24px", margin: "0 8px", color:"#000" }} />
                        </a>
                        <a onClick={handleWhatsAppClick}>
                            <WhatsAppOutlined style={{ fontSize: "24px", margin: "0 8px", color:"black"}} />
                        </a>
                    </Col>
                </Row><br/>
                <Row>
                    <Col span={24}>
                        <div className="footer-link" style={{marginLeft:"10px"}}>
                            <a style={{color:"#000", fontSize:"12px"}} href="/about">About</a>
                            {/*<span style={{ margin: "0 8px" }}>|</span>*/}
                            {/*<a style={{color:"#000",fontSize:"12px"}} href="/contact">Contact</a>*/}
                            <span style={{ margin: "0 8px" }}>|</span>
                            <a style={{color:"#000",fontSize:"12px"}} href="#product">Products</a>
                            <span style={{ margin: "0 8px" }}>|</span>
                            <a style={{color:"#000",fontSize:"12px"}} href="#furniture">Furniture</a>
                            {/*<span style={{ margin: "0 8px" }}>|</span>*/}
                            {/*<a style={{color:"#000",fontSize:"10px"}} href="#accessories">Accessories</a>*/}
                            {/* Add more links as needed */}
                        </div>
                    </Col>
                </Row><br/>

            </Footer>
            <div style={{backgroundColor:"black", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)', textAlign:"center", color:"#fff",width:"100%", height:"50px",paddingTop:"30px"}}>
                {/* Your website footer content here */}
                © {new Date().getFullYear()} Valarpirai. All rights reserved.
            </div>
        </div>

    );
};

export default AppFooter;




