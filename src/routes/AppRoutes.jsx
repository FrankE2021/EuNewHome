// Routes.jsx
import { Routes, Route, Router } from 'react-router-dom';
import Home from '../pages/Home';
import Servicios from '../pages/Servicios';
import Productos from '../pages/Productos';
import Portafolio from '../pages/Portafolio';
import Login from '../pages/Login';
import Blog from '../pages/Blog';
import ArticleBlog from '../components/ArticleBlog';
import ArticleServices from '../components/ArticleServices';
import Cart from '../components/Cart';
import PaymentMethod from '../components/PaymentMethod';

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/articulo/:id" element={<ArticleBlog />} />
        <Route path="/servicio/:id" element={<ArticleServices />} />
        <Route path="/payment" element={<PaymentMethod />} />
    </Routes>
  );
};

export default AppRoutes;
