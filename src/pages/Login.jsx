import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getMessaging, getToken } from 'firebase/messaging';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appFirebase from '../credenciales';
import { logo } from '../assets';
import styles from '../style';

const auth = getAuth(appFirebase);

const Login = () => {
  const navigate = useNavigate();
  const [registrando, setRegistrando] = useState(false);

  const funcAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      if (registrando) {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
        toast.success('Registro exitoso. Bienvenido!');
      } else {
        await signInWithEmailAndPassword(auth, correo, contraseña);
        toast.success('Inicio de sesión exitoso. Bienvenido de nuevo!');
      }
      await subscribeToNotifications(auth.currentUser.uid); // Obtener el ID del usuario y suscribirse a las notificaciones
      navigate('/home');
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      console.error('Error al autenticar:', error);
    }
  };

  // Implementación de Notificaciones
  useEffect(() => {
    const requestPermission = async () => {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted');
      } else {
        console.log('Notification permission denied');
      }
    };
    requestPermission();
  }, []);

  const subscribeToNotifications = async (userId) => {
    const messaging = getMessaging(appFirebase);
    try {
      const token = await getToken(messaging, { vapidKey: 'BNMog6BNoWwTWMIi6WOVYI1SOSsD6rWJnNw6O8ZYqkgwfydkcCLCeZj9hDFCg7waBrgTmoDUzfq0aL7i3FKisi8' });
      if (token) {
        console.log('FCM Registration Token:', token);
        await axios.post('http://localhost:3000/api/saveToken', {
          token: token,
          userId: userId // Pasar el ID del usuario autenticado
        });
      } else {
        console.log('Error obteniendo el token de FCM');
      }
    } catch (error) {
      console.error('Error al guardar el token de notificación:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      <ToastContainer />
      <div className="w-full max-w-md px-8 m-5 bg-black-gradient-2 rounded-[20px] shadow-md feature-card">
        <div className="bg-primary flex justify-center w-full overflow-hidden  rounded-[20px] my-4 ">
          <img src={logo} alt="logo_image" className="w-[50%] h-auto rounded-[25px]" />
        </div>
        <h1 className="flex justify-center font-poppins mb-4 text-xl font-semibold text-gradient rounded-[20px]">BIENVENIDOS</h1>
        <form onSubmit={funcAutenticacion}>
          <div className="mb-4">
            <label className="font-poppins block text-gradient text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Ingresar Email"
              autoComplete="email"
            />
          </div>

          <div className="mb-6">
            <label className="font-poppins block text-gradient text-sm font-bold mb-2" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Ingresar Contraseña"
              autoComplete="current-password"
            />
          </div>

          <div>
            <button
              type="submit"
              className={`py-4 px-6 font-poppins font-medium text-[22px] text-primary bg-gold-gradient rounded-[20px] outline-none hover:transform hover:scale-105 transition-transform duration-300 active:transform active:scale-95 ${styles}`}
            >
              {registrando ? 'Registrate' : 'Iniciar Sesion'}
            </button>
          </div>
        </form>
        <h2 className="font-poppins mb-4 text-xl font-semibold text-gradient m-4">
          {registrando ? 'Si ya tienes cuenta: ' : 'No tienes cuenta: '}
          <button
            className="font-poppins font-medium text-[22px] rounded-[10px] outline-none"
            onClick={() => setRegistrando(!registrando)}
          >
            {registrando ? ' Iniciar sesion' : ' Registrate'}
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Login;
