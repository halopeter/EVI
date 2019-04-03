import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './components/Login';
import Callback from './components/Callback';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/Callback' exact component={Callback} />
          <Redirect to='/login' />
        </Switch>
      </div>
    );
  }
}

export default App;
