import "../App.css"
import logo from "../Images/Logo/logo512.png"
import React, { useState } from 'react';
import { Menu, Layout, Row, Col } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    MailOutlined,
    MenuOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";


const { Header, Content } = Layout;
const HeaderMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <Layout>
            <Header className="site-header">
                <Row  align="middle">
                    <Col xs={12} sm={6}>
                        <div className="logo">
                            <img src={logo} alt="logo" height="30px" width="30px"/>
                            <span>Valarpirai</span>
                        </div>
                    </Col>
                    <Col xs={12} sm={0}>
                        <MenuOutlined style={{float: "right", marginLeft:"120px"}} className="burger-icon" onClick={toggleMenu} />
                    </Col>
                    <Col xs={0} sm={18} >
                        <div>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} >
                                <Menu.Item key="1" icon={<HomeOutlined />}>
                                    <Link to="/">Home</Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<InfoCircleOutlined/>}>
                                    <Link to="/about">About</Link>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<MailOutlined />}>
                                    <Link to="/contact">Contact</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Col>
                </Row>
            </Header>
            {menuVisible && (
                <Content className="mobile-menu">
                    <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="2" icon={<AppstoreOutlined />}>
                            Products
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MailOutlined />}>
                            Contact
                        </Menu.Item>
                    </Menu>
                </Content>
            )}
        </Layout>
    );
}

export default HeaderMenu;