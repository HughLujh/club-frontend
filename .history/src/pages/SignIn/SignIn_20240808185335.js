import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  const [SignInError, setSignInError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send the credentials to a server for authentication
    if (credentials.username && credentials.password) {
      console.log('Submitting:', credentials);
      setSignInError('');
      // Redirect or show success message
    } else {
      setSignInError('Please enter both username and password.');
    }
  };
  
  return (
    <div className="SignIn-page">
      <h1>Sign In</h1>
      {SignInError && <p className="error-message">{SignInError}</p>}
      <form className="SignIn-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Sign In</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;