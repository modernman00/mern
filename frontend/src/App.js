import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditExercise from "./component/edit/EditExercise"
import EditUser from "./component/edit/EditUser"
import CreateExercise from "./component/CreateExercise"
import CreateUser from "./component/CreateUser"
import User from "./component/User"
import Exercise from "./component/Exercise"
import Navigator from "./component/Navigator"


function App() {
  return (
    <Router>
      <Navigator/>
      <br/>  
      <Switch>    
      <Route path="exercise/edit/:id" exact component={EditExercise}/>
      <Route path="user/edit/:id" exact component={EditUser}/>
      <Route path="/createExercise" component={CreateExercise}/>
      <Route path="/createUser" component={CreateUser}/>
      <Route path="/exercise" exact component={Exercise}/>
      <Route path="/user" exact component={User}/>
      </Switch>
    </Router>
  );
}

export default App;
