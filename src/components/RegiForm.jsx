
import React, { useState, useEffect } from 'react';
import { useNavigate ,Link} from 'react-router-dom'; 
import "../assets/css/regiForm.css";
import { FaUserTie, FaLock } from 'react-icons/fa';
import axios from 'axios';

const BASE_URL = "http://localhost:7000"


const RegiForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); 

  useEffect(() => {

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        if(formData.password === formData.confirmPassword){
            const response = await axios.post(`${BASE_URL}/regis`, formData);
            console.log('Success:', response.data);
      
            navigate('/login'); 
        }else{
          alert("Password not Matched -_- ")
        }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="RegiForm-container">

<h2 className="comment ">aur Iska bhi design &#128517; </h2>
      <div className="wapper">
        <form onSubmit={handleSubmit}>
          <h1>Student Registration</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              name="name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <FaUserTie className="icon" />
          </div>
          {/* ----Email--- */}
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FaLock className="icon" />
          </div>
          {/* ----Password--- */}
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FaLock className="icon" />
          </div>
          {/* ----Confirm Password--- */}
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <FaLock className="icon" />
          </div>

          <button type="submit" className="regi_button">
            Sign Up 
          </button>

          <div className="register-link">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default RegiForm;
