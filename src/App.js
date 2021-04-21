import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { makeStyles } from "@material-ui/core/styles";

import AppBar from './layout';
const useStyles = makeStyles((theme) => ({
    content: {
      padding: "2rem",
    },
  }));

const App = ()=>{
    const classes = useStyles();
    
    return(
        <Router>
            <AppBar>
            <Switch>
              <Route path='/'/>
            </Switch>
            </AppBar>
        </Router>
    )
}
export default App;