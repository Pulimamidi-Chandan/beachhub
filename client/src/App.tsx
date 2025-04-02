import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BeachDetails from "./pages/BeachDetails";
import States from "./pages/States";
import { UserProvider } from "./context/UserContext";
import Beaches from "./pages/Beaches";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-blue-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
        
          <Routes>
            <Route path="/" element={<States />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/states" element={<States />} />
            <Route path="/beach/:id" element={<BeachDetails />} />
            <Route path="/states/:stateId/beaches" element={<Beaches />} />
            <Route path="/profile" element={<Profile/>} />
            {/* Add more routes as needed */}
            
            {/* Redirect any unknown routes to the home page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
