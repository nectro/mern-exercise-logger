import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ExercisesList from "./components/exerciseList/exerciseList";
import CreateExercise from "./components/createExersice/createExercise";
import CreateUser from "./components/createUser/createUser";

function App() {

  const [auth, setAuth] = useState()

  return (
    <div className="App">
      <Router>
        <Navbar auth={auth} setAuth={setAuth} />
        <Switch>
          <Route exact path="/">
            <ExercisesList />
          </Route>
          <Route path="/user" >
            <CreateUser  auth={auth} setAuth={setAuth} />
          </Route>
          <Route path="/create" >
            <CreateExercise />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
