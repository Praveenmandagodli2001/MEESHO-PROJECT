import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // role to differentiate between user and seller

  axios.defaults.withCredentials = true;

  const handleSignIn = (e) => {
    e.preventDefault();

    const endpoint = role === 'user' ? "http://localhost:3001/user/signin" : "http://localhost:3001/seller/signin";

    axios.post(endpoint, { email, password })
      .then(result => {
        if (result.data.status) {
          localStorage.setItem('token', result.data.token)
          navigate("/");
        } else {
          console.log("Login failed:", result.data.message);
        }
      }).catch(err => console.log("Error=======>", err));
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="wrapper d-flex align-items-center justify-content-center h-100">
          <div className="card login-form">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form onSubmit={handleSignIn}>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Sign in as</label>
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
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">Sign In</button>
                <Link to="/forgotPassword">Forgot Password?</Link>

                <div className="sign-up mt-4">
                  Don't have an account? <Link to="/signup">Create one</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
