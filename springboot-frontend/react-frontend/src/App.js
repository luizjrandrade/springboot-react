import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmplooyeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {ListEmplooyeeComponent}></Route>
              <Route path = "/employees" component = {ListEmplooyeeComponent}></Route>
              <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
              <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
              {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
              <ListEmplooyeeComponent/>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
