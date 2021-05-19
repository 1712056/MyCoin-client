import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "./layout";
import Dashboard from "./pages/Dashboard";
import CreateWallet from "./pages/CreateWallet";
import AccessWallet from "./pages/AccessWallet";
import SendTransaction from "./pages/SendTransaction";

import AuthState from "./context/auth/AuthState";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "2rem",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <AuthState>
        <AppBar>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/access-wallet" component={AccessWallet} />
            <Route exact path="/create-wallet" component={CreateWallet} />
            <Route exact path="/send-transaction" component={SendTransaction} />
          </Switch>
        </AppBar>
      </AuthState>
    </Router>
  );
};
export default App;
