import React from 'react'
import { Divider,  ListItemText, makeStyles, ThemeProvider, Box, Link} from "@material-ui/core";
import mapa from '../../Image/mapa.png'
import partida from '../../Image/partida.png'
import enemigos from '../../Image/enemigos.png'
import { ListItemButton } from '@mui/material';


const estilos = makeStyles(theme => ({
    texto: {
        marginLeft: theme.spacing(5)
    }
}))

const partidadatos = [
    { label: 'Crear Partida', links: '/CrearPartida'  },
    { label: 'Cargar Partida', links: '/CargarPartida' },
];
const enemigosdatos = [
    { label: 'Crear enemigo', links: '/CrearEnemigo' },
    { label: 'Lista de enemigos', links: '/ListaEnemigos' },
    { label: 'Crear NPC', links: '/CrearNPC' },
    { label: 'Lista de NPC', links: '/ListaNPC' },
];
const mapadatos = [
    { label: 'Mapa general', links: '/MapaGeneral'  },
    { label: 'Buscar region', links: '/Buscar' },
];

const Lista = () => {
    const classes = estilos();
    const [partidaopen, setpartidaOpen] = React.useState(false);
    const [enemigosopen, setenemigosOpen] = React.useState(false);
    const [mapaopen, setmapaOpen] = React.useState(false);

    return (
        <ThemeProvider>
                <Box
                    sx={{
                        bgcolor: partidaopen ? '#eceff1' : '#cfd8dc',
                        pb: partidaopen ? 2 : 0,
                    }}
                >
                    <ListItemButton alignItems="flex-start"
                        onClick={() => setpartidaOpen(!partidaopen)}
                        sx={{
                            px: 3,
                            pt: 2.5,
                            pb: partidaopen ? 0 : 2.5,
                            '&:hover, &:focus': { '& svg': { opacity: partidaopen ? 1 : 0 } },
                        }} >
                        <img src={partida} alt="" />
                        <ListItemText primary="Partida"
                            primaryTypographyProps={{
                                fontSize: 15,
                                fontWeight: 'medium',
                                lineHeight: '20px',
                                mb: '2px',
                            }}
                            secondaryTypographyProps={{
                                noWrap: true,
                                fontSize: 12,
                                lineHeight: '16px',
                                color: partidaopen ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                            }}
                            sx={{ my: 0 }}>
                        </ListItemText>
                    </ListItemButton>
                    {partidaopen &&
                        partidadatos.map((item) => (
                            <ListItemButton
                                key={item.label}
                                sx={{ py: 0.5, minHeight: 42, color: '#000000' }}
                                component={Link}
                                href={item.links}
                            >

                                <ListItemText
                                    className={classes.texto}
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium' }}
                                />
                            </ListItemButton>
                        ))}
                </Box>
                <Divider />
                <Box
                    sx={{
                        bgcolor: enemigosopen ? '#eceff1' : '#cfd8dc',
                        pb: enemigosopen ? 2 : 0,
                    }}
                >
                    <ListItemButton alignItems="flex-start"
                        onClick={() => setenemigosOpen(!enemigosopen)}
                        sx={{
                            px: 3,
                            pt: 2.5,
                            pb: enemigosopen ? 0 : 2.5,
                            '&:hover, &:focus': { '& svg': { opacity: enemigosopen ? 1 : 0 } },
                        }} >
                        <img src={enemigos} alt="" />

                        <ListItemText primary="Enemigos"
                            primaryTypographyProps={{
                                fontSize: 15,
                                fontWeight: 'medium',
                                lineHeight: '20px',
                                mb: '2px',
                            }}
                            secondaryTypographyProps={{
                                noWrap: true,
                                fontSize: 12,
                                lineHeight: '16px',
                                color: enemigosopen ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                            }}
                            sx={{ my: 0 }}>
                        </ListItemText>
                    </ListItemButton>
                    {enemigosopen &&
                        enemigosdatos.map((item) => (
                            <ListItemButton
                                key={item.label}
                                sx={{ py: 0.5, minHeight: 42, color: '#000000' }}
                                component={Link}
                                href={item.links}
                            >

                                <ListItemText
                                    className={classes.texto}
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium' }}
                                />
                            </ListItemButton>
                        ))}
                </Box>
                <Divider />
                <Box
                    sx={{
                        bgcolor: mapaopen ? '#eceff1' : '#cfd8dc',
                        pb: mapaopen ? 2 : 0,
                    }}
                >
                    <ListItemButton alignItems="flex-start"
                        onClick={() => setmapaOpen(!mapaopen)}
                        sx={{
                            px: 3,
                            pt: 2.5,
                            pb: mapaopen ? 0 : 2.5,
                            '&:hover, &:focus': { '& svg': { opacity: mapaopen ? 1 : 0 } },
                        }} >
                        <img src={mapa} alt="" />
                        <ListItemText primary="Mapa"
                            primaryTypographyProps={{
                                fontSize: 15,
                                fontWeight: 'medium',
                                lineHeight: '20px',
                                mb: '2px',
                            }}
                            secondaryTypographyProps={{
                                noWrap: true,
                                fontSize: 12,
                                lineHeight: '16px',
                                color: mapaopen ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                            }}
                            sx={{ my: 0 }}>
                        </ListItemText>
                    </ListItemButton>
                    {mapaopen &&
                        mapadatos.map((item) => (
                            <ListItemButton
                                key={item.label}
                                sx={{ py: 0.5, minHeight: 42, color: '#000000' }}
                                component={Link}
                                href={item.links}
                            >

                                <ListItemText
                                    className={classes.texto}
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium' }}
                                />
                            </ListItemButton>
                        ))}
                </Box>
                <Divider />
        </ThemeProvider>
    )
}

export default Lista







