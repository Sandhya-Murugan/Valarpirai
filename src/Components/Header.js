import "../App.css"
import logo from "../Images/Logo/logo512.png"
import React, {useEffect, useState} from 'react';
import {Menu, Layout, Row, Col, Modal, Drawer, Alert} from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    MailOutlined,
    MenuOutlined,
    InfoCircleOutlined, CloseOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import MenuItem from "antd/es/menu/MenuItem";


const { Header, Content } = Layout;

const  items=[

    {
        label: "Home",
        key: "1",
        url:'/'
    },
    {
        label: "About",
        key: "2",
        url:'about'
    },
    {
        label: "Products",
        key: "3",
        url:'#product'
    },
    {
        label: "Furniture",
        key: "4",
        url:'#furniture'
    },
    {
        label: "Accessories",
        key: "5",
        url:'#mobile_accessories'
    }
]
const HeaderMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setOpenMenu(true);
        setMenuVisible(!menuVisible);
    };

    return (
        <div >
        <Layout>
            <Header className="header" style={{ width:"100%", backgroundColor:"black"}}>
                <Row  align="middle">
                    <Col xs={12} sm={6}>
                        <div className="logo">
                            <img src={logo} alt="logo" height="30px" width="30px"/>
                            <span>Valarpirai</span>
                        </div>
                    </Col>
                    <Col xs={12} sm={0}>
                        <MenuOutlined style={{float: "right", marginLeft:"100px"}} className="burger-icon" onClick={toggleMenu} />
                    </Col>
                    <Col xs={0} sm={18}>
                        <div style={{margin:"50px"}}>
                            <Menu style={{background:"black"}} mode="horizontal" defaultSelectedKeys={['0']} >
                                {items.map(item => (
                                    <Menu.Item  key={item.key} style={{color:"white"}}>
                                        <a  href={item.url} style={{ background: "transparent", outline: "none" }}>{item.label} </a>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </div>
                    </Col>
                </Row>
            </Header>
            {menuVisible && (
                <Content className="mobile-menu">
                    <Drawer width="200px" style={{backgroundColor:"black"}} open={openMenu} onClose={() => {
                        setOpenMenu(false);
                    }}  closeIcon={<CloseOutlined style={{ color: "white"}} />} >
                        <Menu className = "NavbarMenu"
                              style={{backgroundColor:"#212121", height:"50%", borderRadius:"10%"}}>

                            {items.map(item => (
                                <Menu.Item key={item.key} style={{color:"white"}}>
                                    <a onClick={() => {setOpenMenu(false);}}
                                        href={item.url}>{item.label}
                                    </a>
                                </Menu.Item>
                            ))}

                        </Menu>
                    </Drawer>

                </Content>
            )}
        </Layout>
        </div>
    );
}

export default HeaderMenu;