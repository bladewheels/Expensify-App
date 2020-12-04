import React from 'react';
import ReactDOM, { render } from 'react-dom';
import AppRouter from './routers/AppRouter';

// Try to workaround warning in browser console i.e. 
// Warning: Please use `require("history").createBrowserHistory` instead of `require("history/createBrowserHistory")`. 
// Support for the latter will be removed in the next major release.
// From: webpack:///./node_modules/history/warnAboutDeprecatedCJSRequire.js?fee0
// Google-suggested workaround: import { createBrowserHistory } from 'history'

import 'normalize.css/normalize.css';
import './styles/styles.scss'

ReactDOM.render(<AppRouter/>, document.getElementById('app'));