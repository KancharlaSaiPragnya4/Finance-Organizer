import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful');
        setError('Login successful');
        navigate('/Expense'); // Use navigate to redirect to the welcome page

      } else {
        setError(data.message); // Set the error message state
        setError('Invalid credentials')
        
        console.error('Login failed:', data.message);
        // You can handle displaying the error message to the user in your UI
      }
    } catch (error) {
      setError('An error occurred while logging in.'); // Set a generic error message
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
     
      <form>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};


export default LoginForm;


