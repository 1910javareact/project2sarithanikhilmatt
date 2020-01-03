import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import HomeComponent from './components/home/HomeComponent';
//import OptionsComponent from './components/options/OptionsComponent';
import NavBarComponent from './components/navbar/NavBarComponent';
import ProjectNameComponent from './components/projectname/ProjectNameComponent';
import GroupNameComponent from './components/groupname/GroupNameComponent';
import  UserBoardComponent  from './components/board/UserBoardComponent';
import  CardBoardComponent  from './components/board/CardComponent';
import { Card } from 'material-ui';

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
            <Route path='/home' component={HomeComponent} />
            {/* <Route path='/options' component={OptionsComponent} /> */}
            <Route path ='/projectname' component = {ProjectNameComponent} />
            <Route path ='/groupname' component = {GroupNameComponent} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
