import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography, IconButton, Button, Hidden } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../../temaconfig'
import logoGea2 from "../../Image/logoGea2.png";

import Lateral from './Lateral'



const useStyle = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    login: {
        flexGrow: 1
    },
    botones: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly'
    },

}));

const Navbar = (props) => {
    const classes = useStyle()
    return (
        <ThemeProvider theme={theme} >
            <AppBar position='fixed' color='primary'  >
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton className={classes.menuButton} aria-label='menu' onClick={() => props.accionAbrir()}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <img src={logoGea2} alt="" />
                    <Typography variant='h6'  >
                        Dado Arcano
                    </Typography>
                    <div className={classes.botones}>
                        <Hidden smDown >
                            <Lateral/>
                        </Hidden>
                    </div>
                    <Button variant='text' href='/Login' >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar
