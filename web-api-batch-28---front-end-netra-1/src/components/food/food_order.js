import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FoodOrder = () => {
  const [details, setDetails] = useState([]);
  const [address, setAddress] = useState("");
  const [contact_no, setContactNo] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  // const [payment_status, setPaymentStatus] = useState("");
  const [message, setMessage] = useState("");
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("customerTicket"),
    },
  };

  var payment_status;

  if(payment_method === 'Cash On Delivery'){
    payment_status = "Pending";
  } else {
    payment_status = "Paid";
  }

  useEffect(() => {
    axios
      .get("http://localhost:90/cart/get", config)
      .then((result) => {
        console.log(result);
        setDetails(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const orderFood = () => {
    const data = {
      order_item: details,
      total_price: details.reduce(
        (a, c) => a + c.food_id.food_price * c.quantity,
        0
      ),
      payment_method: payment_method,
      payment_status: payment_status,
      contact_no: contact_no,
      address: address,
    };
    axios
      .post("http://localhost:90/order/insert", data, config)
      .then((response) => {
        if (response.data.success === true) {
          setMessage("Order Made Successfully");
          window.location.replace('/my_order');

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

    <section className="bg-light">
                <div class="container pb-3">
                    <div class="row">
                      <div className="col-lg-3"></div>
                    <div class="col-lg-6">
                        <div class="card mb-4">
                        <div class="card-body">
                            <h3 className="text-center">Checkout</h3>
                            <form className="form myForm" action="" method="POST">
                              <div class="mb-3">
                              <label class="form-label">Room number</label>
                              <input type="text" class="form-control" id="room" onChange={(e) => {setAddress(e.target.value)}} placeholder="Enter room number" />
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Contact number</label>
                                <input type="text" class="form-control" id="contact" onChange={(e) => {setContactNo(e.target.value)}} placeholder="Enter contact" />
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Payment status</label>
                                <input type="text" class="form-control" id="payment" placeholder="Pending" disabled />
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Payment method</label>
                                <select
                                    class=" form-select form-select-sm mb-3"
                                    aria-label=".form-select-sm example"
                                    onChange={(e) => {setPaymentMethod(e.target.value)}}>
                                    <option selected>Select Category</option>
                                    <option value="Cash On Delivery">Cash On Delivery</option>
                                    <option value="Esewa">Esewa</option>
                                    <option value="Khalti">Khalti</option>
                                  </select>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Total Price</label>
                                <input type="password" class="form-control" id="payment" placeholder={details.reduce(
                                    (a, c) => a + c.food_id.food_price * c.quantity, 0 )} disabled />
                              </div>
                            </form>

                        <div><Link class="main-btn" type="submit" onClick={orderFood} to=''>Place Order</Link></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
  );
};

export default FoodOrder;