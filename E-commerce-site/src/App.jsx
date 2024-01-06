import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SiteRoutes from './SiteRoutes';
import { useNavigate } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')) ?? null);
  }, []);

  const handleLogin = (userData) => {
    // Assuming the Login component sends user data upon successful login
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <div className="container">
        <div className='col-sm-12'>
          {/* Check if the user is logged in */}
          {user ? (
            <SiteRoutes user={user} />
          ) : (
            // If not logged in, render the Login component
            <Login handleLogin={handleLogin} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
