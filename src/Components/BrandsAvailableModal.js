import React, {useState} from 'react';
import {Button, Modal} from "antd";
import "../App.css"
const BrandsAvailableModal = ({data1,data2}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        // console.log("CLOSED")
        setIsModalVisible(false);
    };
    return (
        <div>
            <Button className="brands-button" style={{backgroundColor:"red", color:"white"}} onClick={showModal}>
                Brands Available
            </Button>
            <Modal
                // title="Brands Available"
                open={isModalVisible}
                footer={
                    null
                    // [
                    // <Button key="ok" type="primary" onClick={handleModalClose}>
                    //     OK
                    // </Button>
                    // ]
                }
                onCancel={handleModalClose}
            >
                <div className="brand-modal-content">
                    {data2.map((product, index) => (
                        <div key={index}>
                            {/*{brand}*/}
                            <img src={data1+'/'+product} alt="logos" />
                        </div>
                    ))}
                </div>
            </Modal>
        </div>

    );
};

export default BrandsAvailableModal;
