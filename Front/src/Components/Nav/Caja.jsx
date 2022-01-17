import React from 'react'
import { makeStyles, Drawer, Divider, Typography, ThemeProvider, ListItem, createTheme, Link } from '@material-ui/core'
import Lista from './Lista'
import logoGea2 from "../../Image/logoGea2.png";


const drawerWidth = 240

const estilos = makeStyles(theme => ({
    drawer:{
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper:{
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,

    barra: {
        marginLeft: theme.spacing(7),
        marginTop: theme.spacing(1)
    },


}))
const Caja = (props) => {

    const classes = estilos()

    return (
        <ThemeProvider theme={createTheme({
          palette: {
            background: { paper: '#cfd8dc' },
          },
        })} >
        <Drawer
            className={classes.drawer}
            variant='temporary'
            classes={{
                paper: classes.drawerPaper,
            }}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <ListItem button className={classes.toolbar} component={Link} href='/' color='#ffffff' >
            <img src={logoGea2} alt="" />
            <Typography variant='h6' >
                Dado Arcano
            </Typography>
            </ListItem>
            
            <Divider/>
            <div>
            <Lista/>
            </div>
        </Drawer>
        </ThemeProvider>

    )
}

export default Caja
