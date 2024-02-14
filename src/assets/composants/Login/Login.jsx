import React, { useState } from 'react';
//import { NavLink, useNavigate } from 'react-router-dom';
import { TextField, Typography ,Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Box } from '@mui/system';
//import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from './Styles';



function Login() {
  const[email,setEmail]=useState();
  const[mot_de_passe,setMot_de_pass]=useState();
  const [showPassword, setShowPassword] = React.useState(false);

const handelChangeEmail=event => {
  setEmail(event.target.value)
}
const handelChangeMotdepass = event =>{
  setMot_de_pass(event.target.value)
}
return (

    <div style={styles.login}>
    <div style={styles.carte} >
            <form style={styles.form}>
            <Box sx={ { ml:1 }}>
            <Typography  style={styles.LoginTitle} variant='h6'>Bienvnue</Typography>
            <Typography  style={styles.LoginTitle} variant='h5'>Connectez Vous à Votre Compte</Typography><br/>
            </Box>
         
            <TextField  label="Email" variant="outlined" onChange={handelChangeEmail} style={styles.LoginEmail} /><br/>
            <TextField  label="password" variant="outlined" type='password' onChange={handelChangeMotdepass} style={styles.LoginEmail}
             helperText="Mot de passe oublié ?" />
            <Box sx={styles.LoginConx}>
            <Button variant='contained' color="success" size="large"  style={styles.LoginButton} >Connexion</Button>
            </Box>
            <Box sx={styles.LoginLink}>
              <Typography style={styles.LoginNavLink} >
                Inscrivez-vous ici . 
               </Typography>
             </Box>
             </form>
      </div>
    </div>
  )
}

export default Login
