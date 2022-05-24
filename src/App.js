import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Auth from './views/Auth';
import { useState } from 'react';
import { getUser } from './services/users';
import Todos from './views/Todos';
import Header from './components/Header';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        <Route exact path='/'>
          {!currentUser ? <Auth setCurrentUser={setCurrentUser} /> : <Redirect to='/todos' />}
        </Route>
        <Route exact path='/todos'>
          {currentUser ? <Todos currentUser={currentUser} /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
