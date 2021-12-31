// landing page
import React from "react"
import {  
    AppBar, 
    Button, 
    IconButton, 
    Toolbar,
    Typography,
 } from "@mui/material"
import { makeStyles } from "@mui/styles"
import SortIcon from '@mui/icons-material/Sort';
import { Link } from "react-router-dom";

 const useStyles = makeStyles((theme?: any) => ({
   appBar: {
    background: 'none',
    boxShadow: 'none',
    height: '10vh',
   },
   sortIconStyle: {
     color: 'white',
     fontSize: '4rm'
   },
   toolBar: {
    background: 'none',
     width: "80%",
     margin: "0 auto", 
   },
   title: {
     flexGrow: '1',
   }
 }));

export const NavBar: React.FC = () => {
    const classes = useStyles();
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <h1 className={classes.title}>Frittery</h1>
          <IconButton>
            <SortIcon className={classes.sortIconStyle} />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar;