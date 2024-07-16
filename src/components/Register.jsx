import React, { useState } from "react";
import axios from "axios";
import "../styles/Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSuccess("");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
        phoneNumber,
      });
  
      setSuccess(response.data.message);
      
      setError(""); // Clear any previous errors
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPhoneNumber("");
    } 
    catch (error) {
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2><b>Register</b></h2>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required/>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
