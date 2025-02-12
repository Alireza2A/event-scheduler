import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
// Pages
import LandingPage from './Pages/Landing';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import MyCalendar from './Pages/Calendar';

function App() {

  return (
      <Router>
          <Routes>
              {/* Landing Page */}
              <Route path="/" element={<LandingPage />} />

              <Route path="/" element={<MainLayout />}>
                  {/* Sign In Route */}
                  <Route path="/signin" element={<SignIn />} />

                  {/* Sign Up Route */}
                  <Route path="/signup" element={<SignUp />} />

                  {/* Home Route, only accessible if authenticated */}
                  <Route path="/home" element={ <Home /> }/>
                  <Route path="/calendar" element={<MyCalendar />} />
              </Route>
          </Routes>
      </Router>
  );
}

export default App;