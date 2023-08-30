import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../css/register.css";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const registerCustomer = (event) => {
    event.preventDefault();
    const data = {
      fname: firstname,
      lname: Lastname,
      email: email,
      phone: phone,
      password: password,
    };

    axios
      .post("http://localhost:90/customer/register", data)
      .then((response) => {
        if (response.data.msg === "Registered successfully") {
          toast.success('Register success!')
        } else {
          toast.error('Register failed!')
        }
        console.log(response.data.msg);
      })
      .catch();
  };
  return (
    <>
      <div class="container-fluid container-register">
        <div class="row main-content text-center">
          <div class="col-md-4 text-center company__info">
            <img src={require("../../images/travelodge.png")} />
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid">
              <div class="row">
                <h3 className="mt-3 login-page-h3">Register</h3>
              </div>
              <div class="row">
                <form control="" class="form-group">
                  <div class="row">
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      class="form__input"
                      onChange={(e) => {
                        setFirstname(e.target.value);
                      }}
                      placeholder="First name"
                    />
                  </div>
                  <div class="row">
                    {/* <!-- <span class="fa fa-lock"></span> --> */}
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      onChange={(e) => {
                        setLastname(e.target.value);
                      }}
                      class="form__input"
                      placeholder="Lastname"
                    />
                  </div>
                  <div class="row">
                    {/* <!-- <span class="fa fa-lock"></span> --> */}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      class="form__input"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="row">
                    {/* <!-- <span class="fa fa-lock"></span> --> */}
                    <input
                      type="number"
                      name="number"
                      id="number"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      class="form__input"
                      placeholder="Phone"
                    />
                  </div>
                  <div class="row">
                    {/* <!-- <span class="fa fa-lock"></span> --> */}
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      class="form__input"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Submit"
                      class="login_btn"
                      onClick={registerCustomer}
                    />
                  </div>
                </form>
              </div>
              <div class="row">
                <p>
                  Already have an account?{" "}
                  <Link to="/login">Login Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Register;
