import React from "react";
// import { Autocomplete } from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import useStyles from "./styles.js";


const Header = () => {
  const classes = useStyles();


  return (
    <AppBar position="static">
      <Toolbar className={classes.Toolbar}>
        <Typography variant="h5" className={classes.title}>
          Trip & Treat
        </Typography>
        <div className="App">
      <h1 className="title">Trip & Treat</h1>
      <img src= {"logo.svg"} className="App-logo" alt="logo" style ={{
        width: "100px",
        height: "100px"
      }} />
    </div>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>

  );
}

export default Header;