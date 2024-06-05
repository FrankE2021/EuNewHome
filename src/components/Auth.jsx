import React from 'react'
import { useState } from 'react';
import Login from './Login';

// Importando los modulos de FireBase
import appFirebase from '../credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AppRoutes from '../routes/AppRoutes';
const auth = getAuth(appFirebase);



function Auth() {
    const [usuario, setUsuario] = useState(null)

    onAuthStateChanged(auth, (usuarioFirebase)=>{
        if(usuarioFirebase){
            setUsuario(usuarioFirebase)
        } else{
            setUsuario(null)
        }
    })

  return (
    <div>
        {usuario ? <AppRoutes correoUsuario = {usuario.email} /> : <Login/>}
    </div>
  )
}

export default Auth
