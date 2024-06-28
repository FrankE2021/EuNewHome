import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import appFirebase from '../credenciales';

const auth = getAuth(appFirebase);
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase);
    });

    return () => unsubscribe();
  }, []);

  const cerrarSesion = () => {
    signOut(auth).then(() => {
      setUsuario(null); // Actualizar el estado del usuario después de cerrar la sesión
    }).catch((error) => {
      console.error("Error al cerrar la sesión:", error);
    });
  };

  return (
    <AuthContext.Provider value={{ usuario, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};
