import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetSingleFood = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  const [set_message, setMessage] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("customerTicket"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:90/food/display_single/" + id)
      .then((response) => {
        console.log(response);
        setDetails(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const addCart = (e) => {
    e.preventDefault();
    const data = {
      food_id: id,
      quantity: quantity,
    };
    axios
      .post("http://localhost:90/cart/insert", data, config)
      .then((response) => {
        if (response.data.success === true) {
          setMessage("Food added To Cart");
          window.location.replace("/food_cart");
          toast.success('Food added to cart successfully!')
        } else {
          setMessage("Please Try Again! Something Went Wrong!!!");
        }
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <section className="bg-light">
        <div class="container py-3">
          <div class="row">
            <div class="col-lg-4 profile-bootstrap-hover">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">Order</span>{" "}
                    the best food
                  </p>
                  <p class="mb-1">Select Quantity</p>

                  <form>
                      <input type= 'number' placeholder='Quantity' onChange={(e)=>{setQuantity(e.target.value)}} className="form-group" />
                  </form>

                  <button className="main-btn my-4" onClick={addCart}>Add to cart</button>
                  <div class="progress rounded">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 profile-bootstrap-hover">
              <div class="card mb-4">
                <div class="card-body">
                  <h3 className="text-center">{details.food_name}</h3>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Food Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{details.food_name}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Price</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Rs. {details.food_price}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Featured desc</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{details.short_desc}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Description</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{details.desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card mb-4">
                  <div class="card-body text-center">
                    <img
                      src={"http://localhost:90/" + details.food_image}
                      alt="avatar"
                      class=" img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default GetSingleFood;
