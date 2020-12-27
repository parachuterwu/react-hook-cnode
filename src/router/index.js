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
        path: '/user/:loginname',
        exact: true,
        render(props) {
            return <UserPage {...props} />;
        },
    },
    {
        path: '/getstart',
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

export { routes };
