import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../components/App.js'

//containers
import Home from './Home'
import AdminHotels from './AdminHotels'

function AppRoutes() {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin-hotels" component={AdminHotels} />
            </Switch>
        </App>
    )
}



export default AppRoutes;