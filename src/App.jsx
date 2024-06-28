// App.js
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContexts';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="App ">
            <AppRoutes />
          </div>
        </CartProvider>  
      </AuthProvider>
    </Router>
  );
};

export default App;
