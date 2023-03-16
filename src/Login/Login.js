
import React, { useContext, useEffect, useState } from 'react';
import '../css/main.css';
import '../css/util.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pic from '../img/img-01.png';
import { AuthContext } from './AuthContext';

const url = 'https://nutrafusion.onrender.com/api/v1/login';

export default function Login() {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const { updateAuthData } = useContext(AuthContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${url}`, {
        email: loginDetails.email,
        password: loginDetails.password,
      })
      .then((response) => {
        const { accessToken, user } = response.data;
        updateAuthData(accessToken, user);
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('user', JSON.stringify(user));
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        // handle error response
      });
  };



  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={Pic} alt="IMG" />
          </div>

          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title">Member Login</span>

            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                value={loginDetails.email}
                onChange={handleInputChange}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                value={loginDetails.password}
                onChange={handleInputChange}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" type="submit">
                Login
              </button>
            </div>

            <div className="text-center p-t-12">
              <span className="txt1">Forgot</span>
              <a className="txt2" href="#">
                Username / Password?
              </a>
            </div>

            <div className="text-center p-t-136">
              <a className="txt2" href="#" onClick={() => navigate('/SignUp')}>
                Create your Account
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
