import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Uncomment this line if needed
import './RegisterForm.css'; // Import the CSS file

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Initialize the error state
  //const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful');
        setError('Registration successful');
        //navigate('/welcome'); // Redirect to the welcome page
      } else {
        setError(data.message); // Set the error message state
        setError('username already taken');
    
        console.error('Registration failed:', data.message);
        // You can handle displaying the error message to the user in your UI
      }
    } catch (error) {
      setError('An error occurred while registering.'); // Set a generic error message
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;




