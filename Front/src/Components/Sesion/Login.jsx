import React, {useState} from 'react';
import Card from '@mui/material/Card';
import {Box, TextField, makeStyles, Button} from '@material-ui/core'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebaseconfig'

const estilos = makeStyles(theme => ({
    espacios:{
        marginLeft: '37%',
        marginTop: 50
    },
    textcenter:{
        marginLeft: '33%'

    },
    buttoncenter:{
        marginLeft: '43%'

    },
}));
const Login = () => {
    const classes = estilos();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const registrarUsuario = async () => {
        try{
           const user = await createUserWithEmailAndPassword(auth, email, pass)
            console.log(user)
        }catch (error) {
            console.log(error.message)
        }
    }
    
    return (
<Card sx={{ marginLeft: 80, marginRight: 80, marginTop: 30, minWidth: 275 }}>
        <Box className='col'> 
        <Box  >
            <h2 className={classes.textcenter}>Inicio de Sesión</h2>
                <TextField className={classes.espacios} onChange={(e) => {setEmail(e.target.value)}} id="demo-helper-text-misaligned-no-helper" label="Email" type="text"/>
                <br />
                <TextField  className={classes.espacios} onChange={(e) => {setPass(e.target.value)}} id="demo-helper-text-misaligned-no-helper" label="Contraseña" type="password"/>
              </Box>
              <br />
              <Button className={classes.buttoncenter} style={{
                borderRadius: 20,
                backgroundColor: "#c5d1d1",
                borderColor: "#616666",
                fontSize: "medium"
              }}
                variant="outlined" onClick={registrarUsuario} > Login </Button>
        </Box>
        <br />
    </Card>
  );

}


export default Login;




    