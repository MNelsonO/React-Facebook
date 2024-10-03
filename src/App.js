import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router components
import Home from './Pages/home/Home';
import Register from './Pages/register/register';
import Login from './Pages/home/login/Login';

function App() {
  return (
    <Router> {/* Wrapping your app with BrowserRouter */}
      <div className="App">
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/register" element={<Register />} /> {/* Register page route */}
          <Route path="/login" element={<Login />} /> {/* Login page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
