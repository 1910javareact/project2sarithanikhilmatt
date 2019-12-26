import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import NavBar from './components/navbar/NavBar';
import { Home } from './components/home/Home';
import { Options } from './components/options/Options';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          {/* <UserLoginStateComponent> */}
          <nav>
            <NavBar />
          </nav>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/options' component={Options} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
