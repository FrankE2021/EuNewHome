// App.js
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; 
import Auth from './components/Auth';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="App ">
          <Auth />
        </div>
      </CartProvider>  
    </Router>
  );
};

export default App;
