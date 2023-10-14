import React from 'react';
import { Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const ScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<UpOutlined />}
            onClick={handleScrollToTop}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
            }}
        />
    );
};

export default ScrollToTop;