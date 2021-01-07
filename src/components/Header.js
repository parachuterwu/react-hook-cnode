import React from 'react';
import { Affix, Layout, Row, Col, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { headerNav } from '../router/index';

const Header = () => {
    const { pathname } = useLocation();
    const currentNav = headerNav.find((nav) => pathname === nav.to).key;

    return (
        <Affix offsetTop={0}>
            <Layout.Header id="header">
                <div className="wrap">
                    <Row>
                        <Col xs={6} sm={4} md={2}>
                            <h1 className="logo">
                                <Link to="/">CNode</Link>
                            </h1>
                        </Col>
                        <Col xs={18} sm={20} md={22}>
                            <Menu
                                mode="horizontal"
                                theme="dark"
                                selectedKeys={[currentNav]}
                            >
                                {headerNav.map((nav) => {
                                    return (
                                        <Menu.Item key={nav.key}>
                                            <Link to={nav.to}>{nav.txt}</Link>
                                        </Menu.Item>
                                    );
                                })}
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </Layout.Header>
        </Affix>
    );
};

export default Header;
