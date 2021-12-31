// landing page
import React from "react"
import { makeStyles } from "@mui/styles"
import { CssBaseline, Box, Typography, IconButton } from "@mui/material"
import NavBar from "../components/navBar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListOfProductPage from "./listOfProducts";
import {
    ThemeProvider,
    createTheme,
    StyledEngineProvider
  } from "@mui/material/styles";

const useStyles = makeStyles((theme?: any) => ({
    root: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
    },
    typographyh1: {
        width: "50%",
        color: "white",
    },
    openingLineWrapper: {
        height: '80vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    expandmoreIcon: {
        color: 'white',
        fontSize: '3rm',
    }
}));

const theme = createTheme()

export const LandingPage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <NavBar/>
                    <Box className={classes.openingLineWrapper}>
                        <Typography variant="h2" className={classes.typographyh1}>
                            The Taste You Have Been Looking For
                        </Typography>
                        <IconButton>
                            <ExpandMoreIcon className={classes.expandmoreIcon}/>
                        </IconButton>
                    </Box>
                    <ListOfProductPage/>
                </StyledEngineProvider>
            </ThemeProvider>
        </div>
    )
}

export default LandingPage;