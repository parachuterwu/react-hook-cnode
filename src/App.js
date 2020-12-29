import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './components/Header';
import Footer from './components/Footer';

import { routes } from './router';
import './static/css/index.css';

const App = () => {
    return (
        <Layout className="page">
            <Header />
            <Layout.Content>
                <div className="wrap">
                    <Switch>
                        {routes.map((routeData, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={routeData.path}
                                    exact={routeData.exact}
                                    render={(props) => {
                                        return routeData.render(props);
                                    }}
                                />
                            );
                        })}
                    </Switch>
                </div>
            </Layout.Content>
            <Footer />
        </Layout>
    );
};

export default App;
