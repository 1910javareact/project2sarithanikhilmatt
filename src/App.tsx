import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './Store';
import HomeComponent from './components/home/HomeComponent';
import OptionsComponent from './components/options/OptionsComponent';
import NavBarComponent from './components/navbar/NavBarComponent';
import ProjectNameComponent from './components/projectname/ProjectNameComponent';
import GroupNameComponent from './components/groupname/GroupNameComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <nav>
            <NavBarComponent />
          </nav>
          <Switch>
            <Route path='/home' component={HomeComponent} />
            <Route path='/options' component={OptionsComponent} />
            <Route path ='/projectname' component = {ProjectNameComponent} />
            <Route path ='/groupname' component = {GroupNameComponent} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
