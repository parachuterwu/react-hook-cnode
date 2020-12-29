import React from 'react';
import { Affix, Layout } from 'antd';

const Header = () => {
    return (
        <Affix offsetTop={0}>
            <Layout.Header>
                <div className="wrap"></div>
            </Layout.Header>
        </Affix>
    );
};

export default Header;
