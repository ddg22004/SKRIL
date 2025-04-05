import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/landingpage/Home";
import About from "./components/landingpage/About";
import Chome from "./components/creatorhomepage/Chome";
import Login from "./components/loginsignup/Login";
import Dashboard from "./components/creatorhomepage/Dashboard";
import Settings from "./components/creatorhomepage/Settings";
import Project from "./components/creatorhomepage/Project";
// Simulated login state (replace with actual authentication logic)
const isLoggedIn = true; // Change this value to simulate login/logout

// Protected Route Component
function ProtectedRoute({ children }) {
  return isLoggedIn ? children : <Login />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <Chome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project"
          element={
            <ProtectedRoute>
              <Project />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
