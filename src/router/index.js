import React from 'react';

import HomePage from '../view/home';
import TopicPage from '../view/topic';
import UserPage from '../view/user';
import GetStartPage from '../view/getStart';
import AboutPage from '../view/about';
import Page404 from '../view/page404';

const routes = [
    {
        path: '/',
        exact: true,
        render(props) {
            return <HomePage {...props} />;
        },
    },
    {
        path: '/topics/:id',
        exact: true,
        render(props) {
            return <TopicPage {...props} />;
        },
    },
    {
        path: '/user/:name',
        exact: true,
        render(props) {
            return <UserPage {...props} />;
        },
    },
    {
        path: '/getStart',
        exact: true,
        render(props) {
            return <GetStartPage {...props} />;
        },
    },
    {
        path: '/about',
        exact: true,
        render(props) {
            return <AboutPage {...props} />;
        },
    },
    {
        path: '',
        exact: false,
        render(props) {
            return <Page404 {...props} />;
        },
    },
];

const headerNav = [
    {
        to: '/',
        txt: '首页',
        key: 'home',
    },
    {
        to: '/getStart',
        txt: '新手入门',
        key: 'getStart',
    },
    {
        to: '/about',
        txt: '关于',
        key: 'about',
    },
];

export { routes, headerNav };
