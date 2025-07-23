import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8081/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.status === 200) {
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('userName', data.name);
      
      navigate('/chatbot');
    } else {
      
      setError(data.message || 'Login failed');
    }
  };

  return (
    <>
      <center>
        <div className='login'>
          <div className='logo'>
            <img src="/images/wmremove-transformed__2_-removebg-preview (2).png" alt="" />
          </div>
          <div className='form mt-5'>
            <h1>Welcome</h1>
            <p>Please Enter Your Email and Password</p>
            <form onSubmit={handleLogin}>
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
              <button className='btn btn-outline-dark mt-5'>Login</button>
            </form>
            {error && <p className="text-danger">{error}</p>}
            <hr />
            <p>Create a new account? <Link className='link' to="/registration">Register</Link></p>
          </div>
        </div>
      </center>
    </>
  );
}

export default Login;
