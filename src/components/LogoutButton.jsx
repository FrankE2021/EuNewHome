// src/components/LogoutButton.js
import React, { useState, useEffect } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from '../style';

// Importando los modulos de FireBase
import appFirebase from '../credenciales'
const auth = getAuth(appFirebase);

const LogoutButton = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Usuario deslogueado");
      navigate('/login'); // Redirigir a la página de inicio de sesión
    }).catch((error) => {
      // An error happened.
      console.error("Error al desloguear: ", error);
    });
  };

  return (
    <>
      <button 
        onClick={handleLogout} 
        className={`py-1 px-2 ml-2 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none ${styles}`}>
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
