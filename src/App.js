import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './components/Login';
import Callback from './components/Callback';
import Character from './components/Character';
import Status from './components/Status';

const App = () => {
  const [characterId, setCharacterId] = React.useState('');

  return (
    <div>
      <Switch>
        <Route
          path="/login"
          exact
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/callback"
          exact
          render={(props) => <Callback {...props} setCharacterId={setCharacterId} />}
        />
        <Route
          path="/character"
          exact
          render={(props) => <Character {...props} characterId={characterId} />}
        />
        <Route
          path="/status"
          exact
          render={(props) => <Status {...props} />}
        />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
};

export default App;