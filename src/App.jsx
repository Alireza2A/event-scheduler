import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

// Pages
import LandingPage from './Pages/Landing';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import MyCalendar from './Pages/Calendar';

//Fonts

import '@fontsource/galada';
import '@fontsource/cabin';
import '@fontsource/cabin-condensed';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('token')) || ''
  );

  // Check if user is authenticated on mount
  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('token'));
    if (storedToken) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Sign In Route */}
        <Route
          path="/signin"
          element={
            authenticated ? (
              <Navigate to="/home" />
            ) : (
              <SignIn setAuthenticated={setAuthenticated} setToken={setToken} />
            )
          }
        />

        {/* Sign Up Route */}
        <Route path="/signup" element={<SignUp />} />

        {/* Home Route, only accessible if authenticated */}
        <Route
          path="/home"
          element={authenticated ? <Home /> : <Navigate to="/signin" />}
        />
        <Route path="/calendar" element={<MyCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;