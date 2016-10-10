import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from './components/MainLayout';
import PostContainer from './components/PostContainer';
import PostList from './components/PostList';
import PostNew from './components/PostNew';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={MainLayout}>

                <Route component={PostContainer}>
                    <IndexRoute component={PostList}/>
                    <Route path='/new-post' component={PostNew} />
                </Route>

                /* Add more nested Route, depending on the logic of the app */

            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
