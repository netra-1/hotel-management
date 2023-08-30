import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUser] = useState("customer");

  const loginCustomer = (event) => {
    event.preventDefault();
    // console.log(userType)

    const data = {
      email: email,
      password: password,
    };

    if (userType === "admin") {
      axios
        .post("http://localhost:90/admin/login", data)
        .then((response) => {
          if (response.data.token) {
            // it will save the token locally, so that it is available
            // all over the component
            localStorage.setItem("adminTicket", response.data.token);

            window.location.replace("/admin_dashboard"); // this will redirect to admin dashboard

            toast.success("Login success!");
          } else {
            toast.error("Login failed!");
          }
          console.log(response.data.token);
        })
        .catch();
    } else if (userType === "staff") {
      axios
        .post("http://localhost:90/staff/login", data)
        .then((response) => {
          if (response.data.token) {
            // it will save the token locally, so that it is available
            // all over the component
            localStorage.setItem("staffTicket", response.data.token);

            window.location.replace("/staff_dashboard"); // this will redirect to staff dashboard
            toast.success("Login success!");
          } else {
            toast.error("Login failed!");
          }
          console.log(response.data.token);
        })
        .catch();
    } else if (userType === "customer") {
      axios
        .post("http://localhost:90/customer/login", data)
        .then((response) => {
          if (response.data.token) {
            // it will save the token locally, so that it is available
            // all over the component
            localStorage.setItem("customerTicket", response.data.token);
            window.location.replace("/user_dashboard"); // this will redirect to user dashboard
            toast.success("Login success!");
          } else {
            toast.error("Login Failed!");
          }
          console.log(response.data.token);
        })
        .catch();
    }
  };

  return (
    <>
      <div class="container-fluid container-login">
        <div class="row main-content bg-success text-center">
          <div class="col-md-4 text-center company__info">
            <img src={require("../../images/travelodge.png")} />
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid">
              <div class="row">
                <h3 className="mt-3 login-page-h3">Login</h3>
              </div>
              <div class="row">
                <form control="" class="form-group">
                  <div class="row">
                    <input
                      type="email"
                      name="Email address"
                      id="email"
                      class="form__input"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Email address"
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

                  <select
                    className="dropdown_login"
                    name="users"
                    id="users"
                    onClick={(e) => {
                      setUser(e.target.value);
                    }}
                  >
                    <option value="customer">customer</option>
                    <option value="staff">staff</option>
                    <option value="admin">admin</option>
                  </select>
                  <div>
                    <input
                      type="submit"
                      value="Submit"
                      class="login_btn"
                      onClick={loginCustomer}
                    />
                  </div>
                </form>
              </div>
              <div class="row">
                <p>
                  Don't have an account?{" "}
                  <Link to="/register">Register Here</Link>
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

export default Login;