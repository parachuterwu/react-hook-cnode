import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';

import { homeNav } from '../router/index';

const HomeNav = () => {
    const { search } = useLocation();

    console.log(qs.parse('a=c'));

    return (
        <Menu mode="horizontal" selectedKeys={['all']} className="index_nav">
            {homeNav.map((item) => {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.to}>{item.txt}</Link>
                    </Menu.Item>
                );
            })}
        </Menu>
    );
};

export default HomeNav;
