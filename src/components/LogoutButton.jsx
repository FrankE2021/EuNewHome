// src/components/LogoutButton.js
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import styles from '../style';

const LogoutButton = () => {
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Usuario deslogueado");
    }).catch((error) => {
      // An error happened.
      console.error("Error al desloguear: ", error);
    });
  };

  return (
    <button onClick={handleLogout} className={`py-1 px-2 ml-5 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none ${styles}`}>
      Logout
    </button>
  );
};

export default LogoutButton;
