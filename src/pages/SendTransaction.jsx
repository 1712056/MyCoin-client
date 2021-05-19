import React, { useState, useEffect, useContext,  } from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SendTransaction= ({ location }) => {
  const classes = useStyles();
  const [userAddress, setUserAddress]= useState();
  const [userBalance, setUserBalance]= useState();
  const history= useHistory();
  


  

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid container item lg={8} spacing={2} style={{height: "100%",}}>
        <Grid item xs={6} >
          <Card  variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Address
              </Typography>
              <Typography variant="h5" component="h2" color="primary">
              0xB249804d3f387617A6E21a1B2Db3e769B2f8EBD8
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} >
          <Card variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Balance
              </Typography>
              <Typography variant="h5" component="h2" color="primary">
                50
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
    </Grid>
    
  )
};

export default SendTransaction;
