import React from 'react';
import { Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const ScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button
            // type="primary"
            className="scroll-to-top"
            shape="circle"
            size="large"
            icon={<UpOutlined />}
            onClick={handleScrollToTop}
        />
    );
};

export default ScrollToTop;