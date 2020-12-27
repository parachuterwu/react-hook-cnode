import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from './router';
import './static/css/index.css';

const App = () => {
    return (
        <div className="App">
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
    );
};

export default App;
