import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './../components/Home';
import { Profile } from '../components/Profile/Profile';

export const AppRoutes = () => {

    return (

        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ Home } /> 
                    <Route exact path="/item/:itemId" component={ Profile } />
                </Switch>
            </div>
        </Router>

    );

};
