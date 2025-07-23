import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:8081/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    
    if (response.status === 200) {
      
      navigate('/login');
    } else {
      
      setError(data.message || 'Registration failed');
    }
  };

  return (
    <>
      <center>
        <div className='register'>
          <div className='logo'>
            <img src="/images/wmremove-transformed__2_-removebg-preview (2).png" alt="" />
          </div>
          <div className='form mt-5'>
            <h1>Welcome</h1>
            <p>Enter Your Details to Register Yourself</p>
            <form onSubmit={handleRegister}>
              <input 
                type="text" 
                name='name' 
                placeholder='Enter your name' 
                className='form-control' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br></br>
              <input 
                type="email" 
                name='email' 
                placeholder='Enter your email' 
                className='form-control' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br></br>
              <input 
                type="password" 
                name='password' 
                placeholder='Enter your password' 
                className='form-control' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className='btn btn-outline-dark mt-5'>Register</button>
            </form>
            {error && <p className="text-danger">{error}</p>}
            <hr />
            <p>Already have an account? <Link className='link' to="/login">Login</Link></p>
          </div>
        </div>
      </center>
    </>
  );
}

export default Registration;
