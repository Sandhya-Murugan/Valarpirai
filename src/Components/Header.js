import {items} from "../Assets/HeaderData";
import { MenuOutlined } from '@ant-design/icons';
import {Menu,Drawer} from "antd";
import {useState} from "react";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint"
import {Link} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import MenuItem from "antd/es/menu/MenuItem";

const HeaderMenu = () => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    return (
        <>
            {!isMobile ? (

                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        className="header-menu"
                    >
                        {items.map((item) => (
                            <Menu.Item key={item.key}>
                                <Link to={item.url}>{item.label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Header>

            ) : (
                <MenuOutlined className="burger-menu" onClick={toggleModal} />
            )}

            <Drawer
                title="Menu"
                open={modalVisible}
                onClose={toggleModal}
                placement = "right"
                footer={null}
            >
                <Menu
                    theme="dark"
                    mode="vertical"
                    className="header-menu"
                    onClick={toggleModal}
                >
                    {items.map((item) => (
                        <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                </Menu>
            </Drawer>
        </>
    )
}

export default HeaderMenu;