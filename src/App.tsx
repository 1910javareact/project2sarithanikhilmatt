import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';

import HomeComponent from './components/home/HomeComponent';
//import OptionsComponent from './components/options/OptionsComponent';


import GroupNameComponent from './components/groupname/GroupNameComponent';
import  UserBoardComponent  from './components/board/UserBoardComponent';
import  CardBoardComponent  from './components/board/CardComponent';
import { Card } from 'material-ui';

import NavBarComponent from './components/navbar/NavBarComponent';
import ProjectNameComponent from './components/projectname/ProjectNameComponent';
import GroupNameComponent from './components/groupname/GroupNameComponent';
import AddTaskComponent from './components/addtask/AddTaskComponent';
import SetUpSuccessfulComponent from './components/setupsuccessful/SetUpSuccessfulComponent';
import UserLoginComponent from './components/login/UserLoginComponent';
import BoardComponent from './components/board/BoardComponent'


const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <nav>
            <NavBarComponent />
          </nav>

          {/* <UserBoardComponent id="board-1" className="board">
            <CardBoardComponent id="card-1" className="card" draggable="true">
              <p>Card One</p>
            </CardBoardComponent>
          </UserBoardComponent>

          <UserBoardComponent id="board-2" className="board">
            <CardBoardComponent id="card-2" className="card" draggable="true">
              <p>Card Two</p>
            </CardBoardComponent>
          </UserBoardComponent> */}


          <Switch>
            <Route path = '/' component = {UserLoginComponent} />
            <Route path ='/login' component = {UserLoginComponent} />
            <Route path ='/projectname' component = {ProjectNameComponent} />
            <Route path ='/groupname' component = {GroupNameComponent} />
            <Route path ='/addtask' component={AddTaskComponent} />
            <Route path ='/setupsuccessful' component={SetUpSuccessfulComponent} />
            <Route path ='/board' component={BoardComponent} />
          </Switch>
        </Router>
      </ Provider>
    </div>
  );
}

export default App;
