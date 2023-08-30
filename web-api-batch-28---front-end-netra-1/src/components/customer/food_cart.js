import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/table.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodCart = () => {
  const [details, setDetails] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("customerTicket"),
    },
  };

  const deleteCart = (cart_id) => {
    console.log(cart_id);
    axios
      .delete("http://localhost:90/cart/delete/" + cart_id, config)
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          console.log("Cart Deleted Successfull");
          window.location.replace('/food_cart');
          toast.success('Food deleted successfully!!');
        } else {
          console.log("Please Try Again!!!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

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

  return (
    <>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <h3 className="text-center pghead fs-1 my-4">My Cart</h3>
        <div col-lg-12 tablemain>
          <table className="table table-striped cart-table">
            <thead className="bg-dark">
              <tr className="border border-3 border-dark text-center text-white">
                <th scope="col">Food Image</th>
                <th scope="col">Food Name</th>
                <th scope="col">Food Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="bodyfs">
              {details.map((singleData) => {
                return (
                  <>
                    <tr className="border border-3 border-dark text-center align-middle">
                      <td className="p-2">
                        <img
                          src={`http://localhost:90/${singleData.food_id.food_image}`}
                          className="img-fluid img-height-cart"
                          alt="profile_pic"
                        />
                      </td>
                      <td>{singleData.food_id.food_name}</td>
                      <td>{singleData.food_id.food_price}</td>
                      <td>{singleData.quantity}</td>
                      <td>{singleData.food_id.food_price * singleData.quantity}</td>
                      <td className="border-start border-2 border-dark">
                        <Link
                        to="/food_order"
                          class="viewButton"
                        >
                          <i class="fa fa-edit" aria-hidden="true"></i> Order
                        </Link>
                        
                        <Link
                          to=""
                          class="deleteButton"
                          onClick={() => {
                            deleteCart(singleData._id);
                          }}
                        >
                          <i class="far fa-trash-alt" aria-hidden="true"></i>{" "}
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
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

export default FoodCart;