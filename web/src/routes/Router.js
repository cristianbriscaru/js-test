import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Users from '../containers/Users';

export default function Router(){

    return (
        
        <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/login" component={Login} />

        </Switch>
        
    )
}