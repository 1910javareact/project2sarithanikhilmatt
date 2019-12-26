import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route path='/home' />
          <Route path='/options' />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
