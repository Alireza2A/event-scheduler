import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
// Pages
import LandingPage from "./Pages/Landing";
import SignIn from "./Pages/Signin";
import SignUp from "./Pages/Signup";
import Home from "./Pages/Home";
import MyCalendar from "./Pages/Calendar";
import EventModal from "./components/EventModal";
//Fonts
import '@fontsource/galada';
import '@fontsource/cabin';
import '@fontsource/cabin-condensed';
import '@fontsource/source-sans-pro';

function App() {
    return (
        <Router>
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<LandingPage />} />
                {/*Protected routing */}
                <Route path="/" element={<MainLayout />}>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/calendar" element={<MyCalendar />} />
                    <Route path="/home/events/:eventId" element={<EventModal />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
