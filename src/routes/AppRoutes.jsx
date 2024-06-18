// Routes.jsx
import { Routes, Route, Router } from 'react-router-dom';
import Home from '../pages/Home';
import Servicios from '../pages/Servicios';
import Productos from '../pages/Productos';
import Portafolio from '../pages/Portafolio';
import Login from '../components/Login';
import Blog from '../pages/Blog';
import Blog1 from '../components/blog/Blog1';
import ArticuloBlog from '../pages/ArticuloBlog';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/blog" element={<Blog />} />
        {/* ======================== Rutas Blog ========================= */}
        <Route path="/articulo/:id" element={<ArticuloBlog />} />
        <Route path="/" element={<Blog1 />} />
    </Routes>
  );
};

export default AppRoutes;
