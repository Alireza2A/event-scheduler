import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router";

// Pages
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./pages/Home"; // Assuming you have a Home page to navigate to after sign-in

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );

  // Check if user is authenticated on mount
  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("token"));
    if (storedToken) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        {/* Sign In Route */}
        <Route
          path="/signin"
          element={
            authenticated ? (
              <Navigate to="/" />
            ) : (
              <SignIn setAuthenticated={setAuthenticated} setToken={setToken} />
            )
          }
        />

        {/* Sign Up Route */}
        <Route path="/signup" element={<SignUp />} />

        {/* Home Route, only accessible if authenticated */}
        <Route
          path="/"
          element={authenticated ? <Home /> : <Navigate to="/signin" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
