import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import HomeComponent from './components/home/HomeComponent';
import NavBarComponent from './components/navbar/NavBarComponent';
import ProjectNameComponent from './components/projectname/ProjectNameComponent';
import GroupNameComponent from './components/groupname/GroupNameComponent';
import AddTaskComponent from './components/addtask/AddTaskComponent';
import SetUpSuccessfulComponent from './components/setupsuccessful/SetUpSuccessfulComponent';
import UserLoginComponent from './components/login/UserLoginComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <nav>
            <NavBarComponent />
          </nav>
          <Switch>
            <Route path='/' component = {HomeComponent} />
            <Route path='/login' component = {UserLoginComponent} />
            <Route path ='/projectname' component = {ProjectNameComponent} />
            <Route path ='/groupname' component = {GroupNameComponent} />
            <Route path='/addtask' component={AddTaskComponent} />
            <Route path='/setupsuccessful' component={SetUpSuccessfulComponent} />
          </Switch>
        </Router>
      </ Provider>
    </div>
  );
}

export default App;
