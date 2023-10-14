import React from 'react';
import {WhatsAppOutlined} from "@ant-design/icons";
import {Button} from "antd";


const AskQuery = ({title, description, imagePath}) => {
    const phoneNumber = "7402413714";
    const handleWhatsAppShare = (description, title) => {
        console.log(title, description)
        const whatsappMessage = `Check out this :  ${title} \n\n ${description}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
    };
    return (
        <div>
            <WhatsAppOutlined
                style={{color:"white", backgroundColor:"green"}}
                onClick={() => handleWhatsAppShare(title, description)}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'blue'; // Increase font size on hover
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'green'; // Reset font size on hover out
                }}
            >
                Whatsapp <WhatsAppOutlined />
            </WhatsAppOutlined>
        </div>
    );
};

export default AskQuery;
