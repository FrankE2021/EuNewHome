// Routes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Servicios from '../pages/Servicios';
import Productos from '../pages/Productos';
import Portafolio from '../pages/Portafolio';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/portafolio" element={<Portafolio />} />
    </Routes>
  );
};

export default AppRoutes;
