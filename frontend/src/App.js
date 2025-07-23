import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Registration from './components/Registration';
import Login from './components/Login';
import Intro from './components/Intro';
import Chatbot from './components/Chatbot';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

function App() {
  

 



  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/chatbot" element={<Chatbot />} />
  
          <Route path="/registration" element={
            <ProtectedRoute>
              <Registration />
            </ProtectedRoute>
          } />
          
          <Route path="/login" element={
            <ProtectedRoute>
              <Login/>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
