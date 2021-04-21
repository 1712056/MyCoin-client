import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "./../icons/ethereum.png";
import LogoText from "./../images/Logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  appbar: {
    backgroundColor: "white",
    paddingRight: "15%",
    paddingLeft: "15%" 

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoText: {
    width: "25%",
  },
}));

export default function AppBarMyCoin() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <div style={{display: 'flex', alignItems: "center", }}>
            <img className={classes.logo} src={Logo} alt="" style={{marginRight: '10px'}} />
            <img className={classes.logoText} src={LogoText} alt="" />
          </div>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button>New wallet</Button>
          <Button>Access</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
