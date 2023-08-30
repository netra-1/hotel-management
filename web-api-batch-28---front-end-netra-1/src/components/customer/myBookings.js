import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/table.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyBookings = () => {
  const [details, setDetails] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("customerTicket"),
    },
  };

  const deleteCart = (my_booking, roomId) => {
    console.log(my_booking);
    console.log(roomId)
    axios
      .delete("http://localhost:90/my_booking/" + my_booking, config)
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          console.log("Booking Deleted Successfull");
          window.location.reload(false)
          toast.success('Cancelled success')
          
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
      .get("http://localhost:90/my_booking/get", config)
      .then((response) => {
        console.log(response);
        setDetails(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
    <div className="container-fluid">
      <h3 className="text-center pghead fs-1 my-4">My Bookings</h3>
      <div className="row justify-content-center">

        {details.map((singleData) => {
          return (
            <>
            <div class="col-md-3 mb-4">
              <div class="card food-bootstrap-hover">
              <div class="card-body m-1 remove-padding-my-order">
                  <img src={singleData.room_id.room_image} alt="avatar"
                  class="img-fluid food_image_bootstrap" />
                  <h5 class="mt-3 ms-1">Room: {singleData.room_id.room_title}</h5>
                  <p class="text-muted mb-1 ms-1">Price: {singleData.room_id.room_price}</p>
                  <p class="text-muted mb-2 ms-1">Booked Date: {singleData.dates[0].split('T')[0] + '  to  ' + singleData.dates[singleData.dates.length - 1].split('T')[0]}</p>
                  <div className="mb-3 ms-1"><Link
                          to=""
                          class="deleteButton"
                          onClick={() => {
                            deleteCart(singleData._id, singleData.room_id._id);
                          }}
                        >
                          <i class="far fa-trash-alt" aria-hidden="true"></i>{" "}
                          Cancel booking
                        </Link></div>
              </div>
              </div>
          </div>
            </>
          );
        })}
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

export default MyBookings;