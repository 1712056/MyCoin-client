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
    width: theme.spacing(50),
    backgroundColor: "#989FCE",
  },
}));

export default function AccessWallet() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [keystore, setKeystore] = useState("");
  const [formData, setFormData] = useState({
    password: "",
  });
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { login } = authContext;
  const classes = useStyles();

  const { password } = formData;

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleAccess = async (e) => {
    e.preventDefault();
    if (password !== null) {
      const data = await login(keystore, password);
      if (data) {
        console.log(data);
      }
    }
  };

    
  //handle change file
  const handleChangeFile =(e)=>{
    const file = e.target.files[0];
    const fileData = new FileReader();
    let fileloaded = e=>{
      const fileContents = e.target.result;
      if(fileContents!==null) {
        setKeystore(fileContents);
        setOpen(o=>!o);
      }
    }
    fileData.onload=fileloaded;
    fileData.readAsText(file);
  }

  //handle download keystore file
  const handleUpload = async (e) => {
    e.preventDefault();
    document.getElementById('inputFile').click();
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
              onClick={handleUpload}
            >
              Continue
            </Button>
            <input type="file" style={{display:"none"}} multiple={false}
            accept=".json,.txt,application/json"
            onChange={evt => handleChangeFile(evt)}
            id="inputFile" ></input>
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
                      onClick={handleAccess}
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
