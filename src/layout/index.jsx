import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import HomeIcon from "@material-ui/icons/Home";

import Logo from "./../icons/ethereum.png";
import LogoText from "./../images/Logo.png";
import imgDashboard from "./../images/dashboard.svg";
import imgSend from "./../images/send.svg";

import AuthContext from "./../context/auth/authContext";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "white",
    padding: "0% 10%",
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoText: {
    width: "20%",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#f2f4fa",
  },
  drawerContainer: {
    overflow: "auto",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function AppBarMyCoin(props) {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.isAuthenticated;
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleLogout = () => {
    logout();
    history.push("/access-wallet");
    setAnchorEl(null);
  };
  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Setting</MenuItem>
      <MenuItem onClick={handleLogout}>Log out</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className={classes.logo}
              src={Logo}
              alt=""
              style={{ marginRight: "10px" }}
            />
            <img className={classes.logoText} src={LogoText} alt="" />
          </div>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {isAuthenticated ? (
            <Grid>
              <IconButton aria-label="show 11 new notifications">
                <Badge badgeContent={11} color="secondary">
                  <NotificationsIcon fontSize="large" />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              >
                <AccountCircle fontSize="large" />
              </IconButton>
            </Grid>
          ) : (
            <Grid>
              <Button
                variant="contained"
                style={{
                  background: "white",
                  color: "blue",
                  border: "1px solid blue",
                  marginRight: "10px",
                }}
                onClick={()=>{history.push('./create-wallet')}}
              >
                New wallet
              </Button>
              <Button variant="contained" color="primary" onClick={()=>{history.push('./access-wallet')}}>
                Access
              </Button>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          {isAuthenticated ? (
            <List>
              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <Avatar src={imgDashboard} />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </Link>

              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <Avatar src={imgSend} />
                </ListItemIcon>
                <ListItemText primary="Send" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/send-transaction" className={classes.link}>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Send Transaction" />
                    </ListItem>
                  </Link>
                </List>
                <List component="div" disablePadding>
                  <Link to="/send-offline" className={classes.link}>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Send Offline" />
                    </ListItem>
                  </Link>
                </List>
              </Collapse>
            </List>
          ) : (
            <List>
              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </Link>
              <Link to="/create-wallet" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="New Wallet" />
                </ListItem>
              </Link>
              <Link to="/access-wallet" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <AssignmentIndIcon />
                  </ListItemIcon>
                  <ListItemText primary="Access Wallet" />
                </ListItem>
              </Link>
            </List>
          )}
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper></Paper>
          </Grid>
        </Grid>
        {props.children}
      </main>
      {renderMenu}
    </div>
  );
}
