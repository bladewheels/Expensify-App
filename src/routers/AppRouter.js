import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import AboutPage from '../components/AboutPage';
import AddExpensePage from '../components/AddExpensePage';
import DashboardPage from '../components/DashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' exact={true} component={DashboardPage}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/create' component={AddExpensePage}/>
                <Route path='/edit' component={EditExpensePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;