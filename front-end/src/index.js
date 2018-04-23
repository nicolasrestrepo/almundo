import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase'
import AppRoutes from './routes'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import createBrowserHistory from 'history/createBrowserHistory'

import config from './config'
import store from './redux/store'
firebase.initializeApp({
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId
})

const customHistory = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}> 
    <Router history={customHistory}>
        <AppRoutes />
    </Router>
   </Provider> 
, document.getElementById('root'))
registerServiceWorker()
