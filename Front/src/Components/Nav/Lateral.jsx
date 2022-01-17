import React from 'react'
import { Toolbar, Typography, IconButton, makeStyles, Menu, MenuItem, ThemeProvider, createTheme, Link } from "@material-ui/core";
import inicio from '../../Image/inicio.png'
import mapa from '../../Image/mapa.png'
import partida from '../../Image/partida.png'
import enemigos from '../../Image/enemigos.png'

const estilos = makeStyles(theme => ({

botones: {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-evenly'
},
down:{
  marginTop: theme.spacing(5)
},
texto:{
  marginLeft: theme.spacing(1)
}
}))
const Lateral = () => {
  const classes = estilos()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [anchorElB, setAnchorElB] = React.useState(null);
  const openB = Boolean(anchorElB);
  const [anchorElC, setAnchorElC] = React.useState(null);
  const openC = Boolean(anchorElC);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const NPCClick = (event) => {
    setAnchorElB(event.currentTarget);
  };
  const MapaClick = (event) => {
    setAnchorElC(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const NPCClose = () => {
    setAnchorElB(null);
  };
  const MapaClose = () => {
    setAnchorElC(null);
  };
  return (
    <ThemeProvider theme={createTheme({
      palette: {
        background: { paper: '#e8eaf6' },
      },
    })} >
    <Toolbar className={classes.botones}>
      <IconButton href='/'>
        <img src={inicio} alt=""/>
        <Typography variant='h6'  className={classes.texto} >
          Inicio
        </Typography>
      </IconButton>
      <IconButton 
              id="button-partida"
              aria-controls="Partida"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
        <img src={partida} alt=""/>
        <Typography variant='h6' className={classes.texto} >
          Partidas
        </Typography>
      </IconButton>
      <Menu
        id="Partida"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'button-partida',
        }}
        className={classes.down}
      >
        <MenuItem onClick={handleClose} component={Link} href='/CrearPartida' color='#ffffff' >Nueva Partida</MenuItem>
        <MenuItem onClick={handleClose} component={Link} href='/CargarPartida' color='#ffffff'>Cargar Partida</MenuItem>
      </Menu>
      <IconButton 
       id="NPC-button"
       aria-controls="Enemigos"
       aria-haspopup="true"
       aria-expanded={openB ? 'true' : undefined}
       onClick={NPCClick}>
        <img src={enemigos} alt=""/>
        <Typography variant='h6'  className={classes.texto} >
          Enemigos
        </Typography>
      </IconButton>
      <Menu
        id="Enemigos"
        anchorEl={anchorElB}
        open={openB}
        onClose={NPCClose}
        MenuListProps={{
          'aria-labelledby': 'NPC-button',
        }}
        className={classes.down}
      >
        <MenuItem onClick={NPCClose} component={Link} href='/CrearEnemigo' color='#ffffff'>Crear enemigos</MenuItem>
        <MenuItem onClick={NPCClose} component={Link} href='/ListaEnemigos' color='#ffffff'>Lista de enemigos</MenuItem>
        <MenuItem onClick={NPCClose} component={Link} href='/CrearNPC' color='#ffffff'>Crear NPC</MenuItem>
        <MenuItem onClick={NPCClose} component={Link} href='/ListaNPC' color='#ffffff'>Lista de NPC</MenuItem>
      </Menu>
      <IconButton
      id="NPC-button"
      aria-controls="Enemigos"
      aria-haspopup="true"
      aria-expanded={openC ? 'true' : undefined}
      onClick={MapaClick}>
        <img src={mapa} alt=""/>
        <Typography variant='h6'  className={classes.texto} >
          Mapas
        </Typography>
      </IconButton>
      <Menu
        id="Enemigos"
        anchorEl={anchorElC}
        open={openC}
        onClose={MapaClose}
        MenuListProps={{
          'aria-labelledby': 'NPC-button',
        }}
        className={classes.down}
      >
        <MenuItem onClick={MapaClose} component={Link} href='/MapaGeneral' color='#ffffff'>Mapa general</MenuItem>
        <MenuItem onClick={MapaClose} component={Link} href='/Buscar' color='#ffffff'>Buscar region</MenuItem>
      </Menu>
    </Toolbar>
    </ThemeProvider>

  );
}

export default Lateral
