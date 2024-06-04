// App.js
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; 
import Auth from './components/Auth';

const App = () => {
  return (
    <Router>
      <div className="App ">
        <Auth />
      </div>
    </Router>
  );
};

export default App;
