import React, { useState, useContext } from "react";
import {
  CssBaseline,
  Avatar,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
} from "@material-ui/core/";
import Popup from "reactjs-popup";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import imgFile from "./../images/file.svg";

import { Link, useHistory } from "react-router-dom";

import AuthContext from "./../context/auth/authContext";
const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
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
    height: theme.spacing(7),
  },
  grid: {
    backgroundColor: "#f2f4fa",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  popup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    
    backgroundColor: "#989FCE",
  },
}));

export default function AccessWallet() {
  const [next, setNext] = useState(false);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [keystore, setKeystore] = useState("");
  const [formData, setFormData] = useState({
    password: "",
  });
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { register } = authContext;
  const classes = useStyles();

  const { password } = formData;

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleNext = async (e) => {
    e.preventDefault();
    if (password !== null) {
      let data = await register({ password });
      if (data) {
        setNext(true);
        data = JSON.stringify(data, null, 2);
        console.log(data);
        setKeystore(data);
      }
    }
  };

  //handle download keystore file
  const handleDownload = (e) => {
    e.preventDefault();
    if (keystore !== null) {
      const blob = new Blob([keystore]);
      console.log(blob);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `UTC-${+new Date()}`;
      link.click();
      setOpen((o) => !o);
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
          Access Wallet
        </Typography>
      </div>
      <div className={classes.paper}>
        <Paper
          style={{
            width: "120%",
          }}
        >
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Access by Software
            </Typography>
            <Grid
              container
              className={classes.grid}
              style={{ backgroundColor: "#FFF6E6" }}
            >
              <Grid item xs={2}>
                <div style={{ fontSize: "30px" }}>⚠️</div>
              </Grid>
              <Grid item xs={10}>
                <Typography component="h1" variant="h6">
                  NOT RECOMMENDED
                </Typography>
                <div>
                  This is not a recommended way to access your wallet. Due to
                  the sensitivity of the information involved, these options
                  should only be used in offline settings by experienced users.
                </div>
              </Grid>
            </Grid>
            <Grid container className={classes.grid} alignItems="center">
              <Grid item xs={3}>
                <Avatar src={imgFile} className={classes.image}></Avatar>
              </Grid>
              <Grid item xs={9}>
                <Typography component="h1" variant="h6">
                  Keystore File
                </Typography>
              </Grid>
            </Grid>
            <div>
              Purchase a hardware wallet for the highest security when accessing
              your crypto
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={handleDownload}
            >
              Continue
            </Button>
            <div className={classes.paper}>
            <Popup open={open} modal lockScroll={true} nested onClose={close}>
                
              <Paper elevation={3} variant="outlined" className={classes.popup}>
                <Grid
                  container
                  className={classes.grid}
                  style={{ backgroundColor: "#FFF6E6" }}
                >
                  <Grid item xs={2}>
                    <div style={{ fontSize: "30px" }}>⚠️</div>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography component="h1" variant="h6">
                      NOT RECOMMENDED
                    </Typography>
                    <div>
                      This is not a recommended way to access your wallet. Due
                      to the sensitivity of the information involved, these
                      options should only be used in offline settings by
                      experienced users.
                    </div>
                  </Grid>
                </Grid>
                <form className={classes.form}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        helperText={"Please fill in this field."}
                        name="password"
                        type="password"
                        id="password"
                        label={formData.password === "" ? "Password" : ""}
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                      onClick={handleNext}
                    >
                      Access Wallet
                    </Button>
                  </Grid>
                </form>
              </Paper>
            </Popup>
            </div>
          </div>
        </Paper>
      </div>
    </Container>
  );
}
