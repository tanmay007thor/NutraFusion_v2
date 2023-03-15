import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";
import "../css/util.css";
import Pic from "../img/img-01.png";
import axios from "axios";
const url = "https://nutrafusion.onrender.com/api/v1/user";
export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    name: "",
    gender: "",
  });

  // Function that updates state variables when input values change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    if (name === "gender") {
      setFormData({
        ...formData,
        gender: value
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  

  // Function that handles form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${url}`, {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        gender : formData.gender
      })
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          navigate('/login');
        }, 5000);
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
            <span className="login100-form-title">Member Sign Up Here</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Name is required"
            >
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <FemaleIcon
                className="Icon-is"
                fontSize="large"
                onClick={() =>
                  handleInputChange({
                    target: { name: "gender", value: "female" },
                  })
                }
              />
              <MaleIcon
                className="Icon-is"
                fontSize="large"
                onClick={() =>
                  handleInputChange({
                    target: { name: "gender", value: "male" },
                  })
                }
              />
              <TransgenderIcon
                className="Icon-is"
                fontSize="large"
                onClick={() =>
                  handleInputChange({
                    target: { name: "gender", value: "other" },
                  })
                }
              />

              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" onClick={handleSubmit}>Sign Up</button>
            </div> 

            <div class="text-center p-t-12">
              <span class="txt1">Forgot</span>
              <a class="txt2" href="#">
                name / Password?
              </a>
            </div>

            <div class="text-center p-t-136">
              <a
                class="txt2"
                href="#"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login Account
                <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
