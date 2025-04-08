import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/landingpage/Home";
import About from "./components/landingpage/About";
import Login from "./components/loginsignup/Login";
import Feature from "./components/landingpage/Feature";
import Settings from "./components/creatorhomepage/Settings";
import Project from "./components/creatorhomepage/Project";
import Chome from "./components/creatorhomepage/Chome";
import AddprojectForm from "./components/creatorhomepage/AddprojectForm";
import Contact from "./components/landingpage/Contact";

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
        <Route path='/features' element={<Feature/>}/>
        <Route path="/contact" element={<Contact/>} />

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
        <Route
          path="/addproject"
          element={
            <ProtectedRoute>
              <AddprojectForm />
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
