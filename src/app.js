import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
// Try to workaround warning in browser console i.e. 
// Warning: Please use `require("history").createBrowserHistory` instead of `require("history/createBrowserHistory")`. 
// Support for the latter will be removed in the next major release.
// From: webpack:///./node_modules/history/warnAboutDeprecatedCJSRequire.js?fee0
// Google-suggested workaround: import { createBrowserHistory } from 'history'

import 'normalize.css/normalize.css';
import './styles/styles.scss'

const DashboardPage = () => (
    <div>
        This is my Dashboard component
    </div>
);
const AboutPage = () => (
    <div>
        This is my About component
    </div>
);
const AddExpensePage = () => (
    <div>
        This is my Add Expense component
    </div>
);
const EditExpensePage = () => (
    <div>
        This is my Edit Expense component
    </div>
);
const HelpPage = () => (
    <div>
        This is my Help component
    </div>
);
const NotFoundPage = () => (
    <div>
        404 - <Link to='/'>Go Home</Link>
    </div>
);
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
        <NavLink to='/about' activeClassName='is-active'>About</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Add Expense</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
        <NavLink to='/foo' activeClassName='is-active'>404</NavLink>
    </header>
);

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));