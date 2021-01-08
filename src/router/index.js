import React from 'react';

import HomePage from '../views/home';
import TopicPage from '../views/topic';
import UserPage from '../views/user';
import GetStartPage from '../views/getStart';
import AboutPage from '../views/about';
import Page404 from '../views/page404';

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

const homeNav = [
    {
        txt: '全部',
        to: '/?tab=all',
        key: 'all',
    },
    {
        txt: '精华',
        to: '/?tab=good',
        key: 'good',
    },
    {
        txt: '分享',
        to: '/?tab=share',
        key: 'share',
    },
    {
        txt: '问答',
        to: '/?tab=ask',
        key: 'ask',
    },
    {
        txt: '招聘',
        to: '/?tab=job',
        key: 'job',
    },
    {
        txt: '客户端测试',
        to: '/?tab=dev',
        key: 'dev',
    },
];

export { routes, headerNav, homeNav };
