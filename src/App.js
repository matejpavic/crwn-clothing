import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.component.jsx';

function App() {

  const HatsPage = () => {
    return (
      <div>
        <h1>HatsPage</h1>
      </div>
    )
  }

  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
