import React, { useState, useContext, useEffect } from "react";
import {
  CssBaseline,
  Avatar,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import imgBackup from "./../images/make-a-backup.svg";
import imgNoLose from "./../images/no-lose.svg";
import imgNoShare from "./../images/no-share.svg";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#004c9e",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    background: "#004c9e",
    color: "#fff",
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      background: "#004c9edd",
    },
    
  },
  image: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  grid: {
    backgroundColor:'#f2f4fa', 
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  }
}));

export default function CreateWallet({ history }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    password: "",
  });

  useEffect(() => {});
  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleNext = async (e) => {
    e.preventDefault();
    if (formData.password !== null) {
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Create Wallet
        </Typography>
      </div>
      <div className={classes.paper}>
        <Paper
          style={{
            width: "120%",
          }}
        >
          <div className={classes.paper}>
            <form className={classes.form}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  helperText={"Please fill in this field."}
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  label={formData.password === "" ? "Password" : ""}
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography color="secondary">
                  DO NOT FORGET to save your password. You will need this
                  Password + Keystore File to unlock your wallet.
                </Typography>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={handleNext}
              >
                Next
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link
                    style={{ color: "inherit" }}
                    to="/access-wallet"
                    variant="body2"
                  >
                    Already have an account? Access wallet
                  </Link>
                </Grid>
              </Grid>
            </form>

            <Typography component="h1" variant="h5">
              Save My Keystore File
            </Typography>
            <Grid container className={classes.grid}>
              <Grid item xs={4}>
                <Avatar src={imgNoLose} className={classes.image}></Avatar>
              </Grid>
              <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                  Don't Lose It
                </Typography>
                <div>Be careful, it can not be recovered if you lose it.</div>
              </Grid>
            </Grid>
            <Grid container className={classes.grid}>
              <Grid item xs={4}>
                <Avatar src={imgNoShare} className={classes.image}></Avatar>
              </Grid>
              <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                  Don't Share It
                </Typography>
                <div>
                  Your funds will be stolen if you use this file on a malicious
                  phishing site.
                </div>
              </Grid>
            </Grid>
            <Grid container className={classes.grid}>
              <Grid item xs={4}>
                <Avatar src={imgBackup} className={classes.image}></Avatar>
              </Grid>
              <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                  Make a Backup
                </Typography>
                <div>
                  Secure it like the millions of dollars it may one day be
                  worth.
                </div>
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={handleNext}
              >
                Download Keystore File
              </Button>

          </div>
        </Paper>
      </div>
    </Container>
  );
}
