import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleRoom = () => {
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
      .get("http://localhost:90/room/display_single/" + id)
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
      <section className="bg-light">
        <div class="container py-3">
          <div class="row">
            <div class="col-lg-4 profile-bootstrap-hover">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">Book</span>{" "}
                    the best rooms
                  </p>
                  <Link to={'/show_room'} className='main-btn mb-3'>Book rooms</Link>
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
                  <h3 className="text-center">{details.room_title}</h3>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Room Title</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{details.room_title}</p>
                    </div>
                  </div>
                  
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Description</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{details.room_desc}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Maximum people</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{details.max_people}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Price</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Rs. {details.room_price}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card mb-4">
                  <div class="card-body text-center">
                    <img
                      src={details.room_image}
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

      {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ms-5 me-5">
                        <p><img className="img-fluid" src={"http://localhost:90/" + details.food_image}/></p>
                        </div>
                        <h3>{details.food_name}</h3>
                        <p>Food name: {details.food_name}</p>
                        <p>Room description: {details.short_desc}</p>
                        <p>Room price: {details.food_price}</p>

                        <form>
                            <input type= 'number' placeholder='Quantity' onChange={(e)=>{setQuantity(e.target.value)}} className="form-group" />
                            <div>
                                <span onClick={decrementQuantity}>-</span>
                                <input value={parseInt(quantity)} disabled />
                                <span onClick={incrementQuantity}>+</span>
                            </div>
                        </form>

                        <button className="main-btn my-4" onClick={addCart}>Add to cart</button>
                    </div>
                </div>
            </div> */}
    </>
  );
};

export default SingleRoom;
