import React, { useState } from 'react';
import { binance, logo, robot } from '../assets';
import styles from '../style';

import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);

const Login1 = () => {

    const [registrando, setRegistrando] = useState(false);

    const funcAutenticacion = async (e) =>{
      e.preventDefault();
      const correo = e.target.email.value;
      const contraseña = e.target.password.value;
      console.log(correo)

      if(registrando){
        await createUserWithEmailAndPassword(auth, correo, contraseña)
      }else{
        await signInWithEmailAndPassword(auth, correo, contraseña)
      }
    } 

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-black-gradient py-6 sm:px-6 lg:px-8`}>
        <div className='mt-4'>
            <img src={logo} alt='logo' className="max-w-xs h-auto" />
        </div> 

        <div className="w-full max-w-md px-8 pt-6 pb-8 mb-4 bg-black-gradient rounded shadow-md feature-card">
            <h1 className="mb-4 text-xl font-semibold text-gradient">Iniciar Sesión</h1>
            <form onSubmit={funcAutenticacion}>
                <div className="mb-4">
                    <label className="block text-gradient text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Ingresar Email" autoComplete="email"/>
                </div>

                <div className='mb-6'>
                    <label className="block text-gradient text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Ingresar Contraseña" autoComplete="current-password"/>
                </div>

                <div className='flex items-center justify-between'>
                   <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none ${styles}`}>{registrando ? 'Registrate' : 'Inicia Sesion'}</button>
                </div>

            </form>
            <h2 className='mb-4 text-xl font-semibold text-gradient m-4'>{registrando ? 'Si ya tienes cuenta:  ' : 'No tienes cuenta:  '}<button className='font-poppins font-medium text-[22px] rounded-[10px] outline-none' onClick={()=>setRegistrando(!registrando)}>{registrando ? ' Inicia sesion' : ' Registrate'}</button> </h2>
        </div>
    </div>
  );
};

export default Login1;
