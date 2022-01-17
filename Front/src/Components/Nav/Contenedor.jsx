import React from 'react'
import { Hidden, makeStyles } from '@material-ui/core'
import Navbar from './Navbar'
import Caja from './Caja'


const estilos = makeStyles(theme => ({
    root:{
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow: 1,
    }
}))


const Contenedor = () => {

    const classes = estilos()
    const [abrir, serAbrir] = React.useState(false)

    const accionAbrir = () => {
        serAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <Navbar accionAbrir={accionAbrir}/>
            <Hidden mdUp>
                <Caja
                open={abrir}
                onClose={accionAbrir}
                />

            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
            </div>
        </div>
    )
}

export default Contenedor
