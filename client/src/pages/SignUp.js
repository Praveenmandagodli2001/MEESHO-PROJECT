import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState('user'); // role to differentiate between user and seller

  const handleSignUp = (e) => {
    e.preventDefault();

    const endpoint = role === 'user' ? "http://localhost:3001/user/signup" : "http://localhost:3001/seller/signup";
    
    axios.post(endpoint, { name, email, password, role })
      .then(result => {
        if (result.data.status) {
          navigate("/signin");
        } else {
          console.log("Sign Up failed:", result.data.message);
        }
      }).catch(err => console.log("Error=======>", err));
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "150px", height: "90%" }}>
        <div className="wrapper d-flex align-items-center justify-content-center h-100">
          <div className="card register-form">
            <div className="card-body">
              <h5 className="card-title text-center">Sign Up</h5>
              <form onSubmit={handleSignUp}>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Sign up as</label>
                  <select 
                    id="role" 
                    className="form-select" 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)} 
                  >
                    <option value="user">User</option>
                    <option value="seller">Seller</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter your name" 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter your password" 
                    required 
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">Sign Up</button>

                <div className="sign-up mt-4">
                  Already have an account? <Link to="/signin">Sign in here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
