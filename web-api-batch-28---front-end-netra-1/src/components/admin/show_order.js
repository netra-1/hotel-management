import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import "../../css/show_order.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShowOrder = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("staffTicket"),
    },
  };

  const acceptOrder = (id, e) => {
    e.preventDefault();
    const data = {
      id: id,
    };
    axios
      .put("http://localhost:90/order/accept", data, config)
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          setMessage("Order accepted Successfully");
          window.location.reload(false);
          toast.success('Order accepted Successfully');
        } else {
          setMessage("Please Try Again! Something Went Wrong!!!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deliverOrder = (id, e) => {
    e.preventDefault();
    const data = {
      id: id,
    };
    axios
      .put("http://localhost:90/order/delivered", data, config)
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          setMessage("Order Delivered Successfully");
          window.location.reload(false);
          toast.success('Order delivered Successfully');
        } else {
          setMessage("Please Try Again! Something Went Wrong!!!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:90/order/get", config)
      .then((res) => {
        console.log(res.data.data);
        setOrders(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="m-5">
        <h3 className="text-center">Food Orders</h3>
        <div className="row d-flex justify-content-evenly">
          {orders.map((data) => (
            <>
                {data.order_item.map((food) => (
                  <div class="col-md-5 col-sm-8 order-single-card rounded-4 card mb-5 mt-4 p-2">
                    <div class="row g-0">
                      <div class="col-md-6 text-center">
                        <img
                          src={`http://localhost:90/${food.food_id.food_image}`}
                          className="img-fluid order_single_image"
                          alt="image"
                        />
                      </div>
                      <div class="col-md-5 border-start border-1">
                        <div class="card-body card-body-order">
                          <h5> {food.food_id.food_name}</h5>
                          <p>Total Price: Rs. {data.total_price}</p>
                          <p>Order Date:
                            {moment(data.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                          </p>
                          <p>Order Status: {data.order_status}</p>
                          <p>Payment Method: {data.payment_method}</p>
                          <p>Phone Number: {data.contact_no}</p>
                          <p>Address: {data.address}</p>

                        {data.order_status === "Requested" && (
                            <button
                            className="viewButton"
                            onClick={(e) => {
                                acceptOrder(data._id, e);
                            }}
                            >
                            Accept
                            </button>
                        )}
                        {data.order_status === "On the Way" && ( <button className="viewButton" onClick={(e) => {
                                deliverOrder(data._id, e); }} >Deliver</button>
                        )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          ))}
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
export default ShowOrder;
