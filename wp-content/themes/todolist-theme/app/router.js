import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import ToDoLayoutContainer from './components/containers/todo-layout-container';

// Pages
import ToDoListContainer from './components/containers/todo-list-container';
import ToDoCreateContainer from './components/containers/todo-create-container';
import ToDoListDetail from './components/containers/todo-list-detail-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
        <Route path="/">
          <Route component={ToDoLayoutContainer}>
            <IndexRoute component={ToDoListContainer} />
          </Route>
        </Route>
        <Route path="/create">
          <Route component={ToDoLayoutContainer}>
            <IndexRoute component={ToDoCreateContainer} />
          </Route>
        </Route>
        <Route path=":todoId">
          <Route component={ToDoLayoutContainer}>
            <IndexRoute component={ToDoListDetail} />
          </Route>
        </Route>
    </Route>
  </Router>
);
