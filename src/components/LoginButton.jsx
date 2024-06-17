// src/components/LogoutButton.js
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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


  return (
    <>
      <button 
        onClick={() => navigate('/login')}
        className={`py-1 px-2 ml-5 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none ${styles}`}>
        Login
      </button>
    </>
  );
};

export default LogoutButton;
