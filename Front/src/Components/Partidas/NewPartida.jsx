import React, { useState } from 'react'
import uniqid from 'uniqid';
import { TextField, Hidden, makeStyles, Button, FormControl, InputLabel, Select, MenuItem, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, Box } from '@material-ui/core';
import Avatares from '../../Image/avatares'
import './Colores.css'


const estilos = makeStyles(theme => ({
  margenleft: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  margenraigt: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  combobox: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
    width: 182
  },
  margenlista: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around'
  },
  margenbutton: {
    marginLeft: theme.spacing(24),
    marginTop: theme.spacing(3),
  },
  margenbutton2: {
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(3),
  },
  textos: {
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(3),
  },
  textos2: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  avatar: {
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(3),
  },
}));
const NewPartida = () => {

  const classes = estilos();
  const [nombre, setNombre] = useState('')
  const [pj, setPj] = useState('')
  const [raza, setRaza] = useState('')
  const [clase, setClase] = useState('')
  const [nivel, setNivel] = useState('')
  const [ca, setCa] = useState('')
  const [vida, setVida] = useState('')
  const [armor, setArmor] = useState('')
  const [mov, setMov] = useState('')
  const [fua, setFua] = useState('')
  const [des, setDes] = useState('')
  const [cons, setCons] = useState('')
  const [int, setInt] = useState('')
  const [sab, setSab] = useState('')
  const [car, setCar] = useState('')
  const [com, setCom] = useState('')
  const [listajugadores, setListajugadores] = useState([])
  const [error, setError]= useState('')

  const handleChange = (event) => {
    setClase(event.target.value)
  };
  const handleChange2 = (event) => {
    setRaza(event.target.value)
  };
  const handleChange3 = (event) => {
    setArmor(event.target.value)
  };

  const addPersonaje = (e) => {
    e.preventDefault()
    if(!nombre.trim()){
      setError('El Campo nombre esta vacio')
      return
    }
    if(!raza.trim()){
      setError('El Campo raza esta vacio')
      return
    }
    if(!pj.trim()){
      setError('El Campo nombre del Personaje esta vacio')
      return
    }
    if(!clase.trim()){
      setError('El Campo clase esta vacio')
      return
    }
    if(!nivel.trim()){
      setError('El Campo nivel esta vacio')
      return
    }
    if(!ca.trim()){
      setError('El Campo clase de armadura esta vacio')
      return
    }
    if(!armor.trim()){
      setError('El Campo armadura esta vacio')
      return
    }
    if(!vida.trim()){
      setError('El Campo vida esta vacio')
      return
    }
    if(!mov.trim()){
      setError('El Campo movimiento esta vacio')
      return
    }
    if(!fua.trim()){
      setError('El Campo fuerza esta vacio')
      return
    }
    if(!des.trim()){
      setError('El Campo destreza esta vacio')
      return
    }
    if(!cons.trim()){
      setError('El Campo constitucion esta vacio')
      return
    }
    if(!int.trim()){
      setError('El Campo inteligencia esta vacio')
      return
    }
    if(!sab.trim()){
      setError('El Campo sabiduria esta vacio')
      return
    }
    if(!car.trim()){
      setError('El Campo carisma esta vacio')
      return
    }
    if(!com.trim()){
      setError('El Campo constitucion esta vacio')
      return
    }
    const nuevoNombre = {
      id: uniqid(),
      jugador: nombre,
      pjnombre: pj,
      pjclase: clase,
      pjraza: raza,
      pjnivel: nivel,
      pjarmadura: ca,
      pjvida: vida,
      pjarmor: armor,
      pjmov: mov,
      pjfua: fua,
      pjdes: des,
      pjcons: cons,
      pjint: int,
      pjsab: sab,
      pjcar: car,
      pjcom: com,
    }
    setListajugadores([...listajugadores, nuevoNombre])
    setNombre('')
    setPj('')
    setRaza('')
    setClase('')
    setNivel('')
    setCa('')
    setVida('')
    setArmor('')
    setMov('')
    setFua('')
    setDes('')
    setCons('')
    setInt('')
    setSab('')
    setCar('')
    setCom('')
    setError('')
  }
  return (

    <Box className='row' >
        <Box className="col-md-6 " >
          <form onSubmit={(e) => addPersonaje(e)} className="form-group">
            <Hidden smDown>
              <h2  className={classes.textos}>Cargar Personaje</h2>
              <Box>
                <TextField onChange={(e) => setNombre(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Nombre Jugador" value={nombre} />
                <FormControl className={classes.combobox} >
                  <InputLabel id="demo-simple-select-standard-label">Raza</InputLabel>
                  <Select
                    autoHighlight
                    sx={{ width: 300 }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={raza}
                    onChange={handleChange2}
                    label="Clase"
                  >
                    <MenuItem value={'Draconido'}>Dracónido</MenuItem>
                    <MenuItem value={'Elfo'}>Elfo</MenuItem>
                    <MenuItem value={'Enano'}>Enano</MenuItem>
                    <MenuItem value={'Humano'}>Humano</MenuItem>
                    <MenuItem value={'Mediano'}>Mediano</MenuItem>
                    <MenuItem value={'SemiElfo'}>Semi Elfo</MenuItem>
                    <MenuItem value={'SemiOrco'}>Semi Orco</MenuItem>
                    <MenuItem value={'Tiefling'}>Tiefling</MenuItem>

                  </Select>
                </FormControl>
              </Box>
              <Box>
                <TextField onChange={(e) => setPj(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Nombre PJ" value={pj} />
                <FormControl className={classes.combobox} >
                  <InputLabel id="demo-simple-select-standard-label">Clase</InputLabel>
                  <Select
                    autoHighlight
                    sx={{ width: 300 }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={clase}
                    onChange={handleChange}
                    label="Clase"
                  >
                    <MenuItem value={'Barbaro'}>Barbaro</MenuItem>
                    <MenuItem value={'Bardo'}>Bardo</MenuItem>
                    <MenuItem value={'Brujo'}>Brujo</MenuItem>
                    <MenuItem value={'Clerigo'}>Clérigo</MenuItem>
                    <MenuItem value={'Druida'}>Druida</MenuItem>
                    <MenuItem value={'Explorador'}>Explorador</MenuItem>
                    <MenuItem value={'Guerrero'}>Guerrero</MenuItem>
                    <MenuItem value={'Hechicero'}>Hechicero</MenuItem>
                    <MenuItem value={'Mago'}>Mago</MenuItem>
                    <MenuItem value={'Monje'}>Monje</MenuItem>
                    <MenuItem value={'Paladin'}>Paladín</MenuItem>
                    <MenuItem value={'Picaro'}>Pícaro</MenuItem>

                  </Select>
                </FormControl>
              </Box>
              <Box >
                <TextField onChange={(e) => setNivel(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Nivel" value={nivel} />
                <TextField onChange={(e) => setCa(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="C.A" value={ca} />
              </Box>
              <Box >
                <FormControl className={classes.combobox} >
                  <InputLabel id="demo-simple-select-standard-label">Armadura</InputLabel>
                  <Select
                    autoHighlight
                    sx={{ width: 300 }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={armor}
                    onChange={handleChange3}
                    label="Armadura"
                  >
                    <MenuItem value={'Acolchada'}>Armadura Acolchada</MenuItem>
                    <MenuItem value={'cuero'}>Armadura de cuero</MenuItem>
                    <MenuItem value={'tachonado'}>Armadura de cuero tachonado</MenuItem>
                    <MenuItem value={'pieles'}>Armadura de pieles</MenuItem>
                    <MenuItem value={'mallas'}>Camisote de mallas</MenuItem>
                    <MenuItem value={'Coraza'}>Coraza</MenuItem>
                    <MenuItem value={'Semiplacas'}>Semiplacas</MenuItem>
                    <MenuItem value={'anillas'}>Cota de anillas</MenuItem>
                    <MenuItem value={'Cmallas'}>Cota de mallas</MenuItem>
                    <MenuItem value={'bandas'}>Armadura de bandas</MenuItem>
                    <MenuItem value={'placas'}>Armadura de placas</MenuItem>

                  </Select>
                </FormControl>
                <TextField onChange={(e) => setVida(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="Vida" value={vida} />
              </Box>
              <Box >
                <TextField onChange={(e) => setMov(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Movimiento" value={mov} />
                <TextField onChange={(e) => setFua(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="Fuerza" value={fua} />
              </Box>
              <Box >
                <TextField onChange={(e) => setDes(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Destreza" value={des} />
                <TextField onChange={(e) => setCons(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="Constitucion" value={cons} />
              </Box>
              <Box >
                <TextField onChange={(e) => setInt(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Inteligencia" value={int} />
                <TextField onChange={(e) => setSab(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="Sabiduria" value={sab} />
              </Box>
              <Box >
                <TextField onChange={(e) => setCar(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Carisma" value={car} />
                <TextField onChange={(e) => setCom(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="Competencia" value={com} />
              </Box>
              <Button className={classes.margenbutton} style={{
                borderRadius: 20,
                backgroundColor: "#c5d1d1",
                borderColor: "#616666",
                fontSize: "medium"
              }}
                variant="outlined" type="submit" > Cargar </Button>
            </Hidden>
            <Hidden mdUp>
              <h2 className={classes.textos2}>Cargar Personaje</h2>

              <Box>
                <TextField onChange={(e) => setNombre(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Nombre Jugador" value={nombre} />
                <FormControl className={classes.combobox} >
                  <InputLabel id="demo-simple-select-standard-label">Raza</InputLabel>
                  <Select
                    autoHighlight
                    sx={{ width: 300 }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={raza}
                    onChange={handleChange2}
                    label="Clase"
                  >
                    <MenuItem value={'Draconido'}>Dracónido</MenuItem>
                    <MenuItem value={'Elfo'}>Elfo</MenuItem>
                    <MenuItem value={'Enano'}>Enano</MenuItem>
                    <MenuItem value={'Humano'}>Humano</MenuItem>
                    <MenuItem value={'Mediano'}>Mediano</MenuItem>
                    <MenuItem value={'SemiElfo'}>Semi Elfo</MenuItem>
                    <MenuItem value={'SemiOrco'}>Semi Orco</MenuItem>
                    <MenuItem value={'Tiefling'}>Tiefling</MenuItem>

                  </Select>
                </FormControl>
              </Box>
              <Box>
                <TextField onChange={(e) => setPj(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Nombre PJ" value={pj} />
                <FormControl className={classes.combobox} >
                  <InputLabel id="demo-simple-select-standard-label">Clase</InputLabel>
                  <Select
                    autoHighlight
                    sx={{ width: 300 }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={clase}
                    onChange={handleChange}
                    label="Clase"
                  >
                    <MenuItem value={'Barbaro'}>Barbaro</MenuItem>
                    <MenuItem value={'Bardo'}>Bardo</MenuItem>
                    <MenuItem value={'Brujo'}>Brujo</MenuItem>
                    <MenuItem value={'Clerigo'}>Clérigo</MenuItem>
                    <MenuItem value={'Druida'}>Druida</MenuItem>
                    <MenuItem value={'Explorador'}>Explorador</MenuItem>
                    <MenuItem value={'Guerrero'}>Guerrero</MenuItem>
                    <MenuItem value={'Hechicero'}>Hechicero</MenuItem>
                    <MenuItem value={'Mago'}>Mago</MenuItem>
                    <MenuItem value={'Monje'}>Monje</MenuItem>
                    <MenuItem value={'Paladin'}>Paladín</MenuItem>
                    <MenuItem value={'Picaro'}>Pícaro</MenuItem>

                  </Select>
                </FormControl>
              </Box>
              <Box >
                <TextField onChange={(e) => setNivel(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Nivel" value={nivel} />
                <TextField onChange={(e) => setCa(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="C.A" value={ca} />
              </Box>
              <Box >
              <FormControl className={classes.combobox} >
                  <InputLabel id="demo-simple-select-standard-label">Armadura</InputLabel>
                  <Select
                    autoHighlight
                    sx={{ width: 300 }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={armor}
                    onChange={handleChange3}
                    label="Armadura"
                  >
                    <MenuItem value={'Acolchada'}>Armadura Acolchada</MenuItem>
                    <MenuItem value={'cuero'}>Armadura de cuero</MenuItem>
                    <MenuItem value={'tachonado'}>Armadura de cuero tachonado</MenuItem>
                    <MenuItem value={'pieles'}>Armadura de pieles</MenuItem>
                    <MenuItem value={'mallas'}>Camisote de mallas</MenuItem>
                    <MenuItem value={'Coraza'}>Coraza</MenuItem>
                    <MenuItem value={'Semiplacas'}>Semiplacas</MenuItem>
                    <MenuItem value={'anillas'}>Cota de anillas</MenuItem>
                    <MenuItem value={'Cmallas'}>Cota de mallas</MenuItem>
                    <MenuItem value={'bandas'}>Armadura de bandas</MenuItem>
                    <MenuItem value={'placas'}>Armadura de placas</MenuItem>

                  </Select>
                </FormControl>
                <TextField onChange={(e) => setVida(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="Vida" value={vida} />
              </Box>
              <Box >
                <TextField onChange={(e) => setMov(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Movimiento" value={mov} />
                <TextField onChange={(e) => setFua(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="Fuerza" value={fua} />
              </Box>
              <Box >
                <TextField onChange={(e) => setDes(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Destreza" value={des} />
                <TextField onChange={(e) => setCons(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="Constitucion" value={cons} />
              </Box>
              <Box >
                <TextField onChange={(e) => setInt(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Inteligencia" value={int} />
                <TextField onChange={(e) => setSab(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="Sabiduria" value={sab} />
              </Box>
              <Box >
                <TextField onChange={(e) => setCar(e.target.value)} className={classes.margenleft} id="demo-helper-text-misaligned-no-helper" label="Carisma" value={car} />
                <TextField onChange={(e) => setCom(e.target.value)} className={classes.margenraigt} id="demo-helper-text-misaligned-no-helper" label="Competencia" value={com} />
              </Box>
              <Button className={classes.margenbutton2} style={{
                borderRadius: 20,
                backgroundColor: "#c5d1d1",
                borderColor: "#616666",
                fontSize: "medium"
              }}
                variant="outlined" type="submit" > Cargar </Button>
            </Hidden>
          </form>
          {
            error != null ? (
              <Box className='alert ' sx={{color:'red'}}>{error}</Box>
            ):
            (
              <Box></Box>
            )
          }
        </Box>
        <Box className="col-md-6 " >
          <h2 className={classes.textos}>Lista de Personajes</h2>
          <br />
          <Hidden smDown>
          <Box
                sx={{
                  width: 470,
                }}>
          <List sx={{ width: '100%', maxWidth: 182}} >
            {
              listajugadores.map(item =>
                <ListItem key="{item.id}" alignItems="flex-start" sx={{bgColor: "primary.main"}}  >
                  <ListItemAvatar>
                    {item.pjclase === "Barbaro" &&
                      <Avatar alt="Remy Sharp" src={Avatares.barbaro} />
                    }
                    {item.pjclase === "Bardo" &&
                      <Avatar alt="Remy Sharp" src={Avatares.bardo} />
                    }
                    {item.pjclase === "Brujo" &&
                      <Avatar alt="Remy Sharp" src={Avatares.brujo} />
                    }
                    {item.pjclase === "Clerigo" &&
                      <Avatar alt="Remy Sharp" src={Avatares.clerigo} />
                    }
                    {item.pjclase === "Druida" &&
                      <Avatar alt="Remy Sharp" src={Avatares.druida} />
                    }
                    {item.pjclase === "Explorador" &&
                      <Avatar alt="Remy Sharp" src={Avatares.explorador} />
                    }
                    {item.pjclase === "Guerrero" &&
                      <Avatar alt="Remy Sharp" src={Avatares.guerrero} />
                    }
                    {item.pjclase === "Hechicero" &&
                      <Avatar alt="Remy Sharp" src={Avatares.hechicero} />
                    }
                    {item.pjclase === "Mago" &&
                      <Avatar alt="Remy Sharp" src={Avatares.mago} />
                    }
                    {item.pjclase === "Monje" &&
                      <Avatar alt="Remy Sharp" src={Avatares.monje} />
                    }
                    {item.pjclase === "Paladin" &&
                      <Avatar alt="Remy Sharp" src={Avatares.paladin} />
                    }
                    {item.pjclase === "Picaro" &&
                      <Avatar alt="Remy Sharp" src={Avatares.picaro} />
                    }
                  </ListItemAvatar>
                  <Divider/>

                  <ListItemText
                    primary={item.pjnombre}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2">
                          <Divider  component="li"  />

                        </Typography>
                        {item.jugador}, {item.pjraza}
                      </React.Fragment>
                    }
                    
                  />
                  <Divider/>


                </ListItem>
                
              )

            }
              <Divider variant="inset" />

          </List>
          </Box>
          </Hidden>
          <Hidden mdUp>
          <Box className={classes.avatar}
                sx={{
                  width: 50,
                }}>
          <List  >
            {
              listajugadores.map(item =>
                <ListItem key="{item.id}" alignItems="flex-start" sx={{bgColor: "primary.main"}}  >
                  <ListItemAvatar>
                    {item.pjclase === "Barbaro" &&
                      <Avatar alt="Remy Sharp" src={Avatares.barbaro} />
                    }
                    {item.pjclase === "Bardo" &&
                      <Avatar alt="Remy Sharp" src={Avatares.bardo} />
                    }
                    {item.pjclase === "Brujo" &&
                      <Avatar alt="Remy Sharp" src={Avatares.brujo} />
                    }
                    {item.pjclase === "Clerigo" &&
                      <Avatar alt="Remy Sharp" src={Avatares.clerigo} />
                    }
                    {item.pjclase === "Druida" &&
                      <Avatar alt="Remy Sharp" src={Avatares.druida} />
                    }
                    {item.pjclase === "Explorador" &&
                      <Avatar alt="Remy Sharp" src={Avatares.explorador} />
                    }
                    {item.pjclase === "Guerrero" &&
                      <Avatar alt="Remy Sharp" src={Avatares.guerrero} />
                    }
                    {item.pjclase === "Hechicero" &&
                      <Avatar alt="Remy Sharp" src={Avatares.hechicero} />
                    }
                    {item.pjclase === "Mago" &&
                      <Avatar alt="Remy Sharp" src={Avatares.mago} />
                    }
                    {item.pjclase === "Monje" &&
                      <Avatar alt="Remy Sharp" src={Avatares.monje} />
                    }
                    {item.pjclase === "Paladin" &&
                      <Avatar alt="Remy Sharp" src={Avatares.paladin} />
                    }
                    {item.pjclase === "Picaro" &&
                      <Avatar alt="Remy Sharp" src={Avatares.picaro} />
                    }
                  </ListItemAvatar>
                  <Divider/>


                </ListItem>
                
              )

            }
              <Divider variant="inset" />

          </List>
          </Box>
          </Hidden>
        </Box>
      </Box>
  )
}
export default NewPartida
