import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AdminDashboard = () => {
  const [staffData, setStaffData] = useState("");
  const [userData, setUserData] = useState("");
  const [order, setOrder] = useState("");
  const [roomCategory, setRoomCategory] = useState("");
  const [room, setRooms] = useState("");
  const [food, setFood] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [reservation, setReservations] = useState("");
  // console.log(userData)

  useEffect(() => {
    axios
      .get("http://localhost:90/all_staff")
      .then((response) => {
        setStaffData(response.data.data.length);
        console.log(response.data);
        // datas = response.data
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:90/all_user")
      .then((response) => {
        setUserData(response.data.data.length);
        console.log(response.data);
        // datas = response.data
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:90/all_reservations")
      .then((response) => {
        setReservations(response.data.data.length);
        console.log(response.data);
        // datas = response.data
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:90/all_orders")
      .then((response) => {
        setOrder(response.data.data.length);
        console.log(response.data);
        // datas = response.data
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:90/room_category")
      .then((response) => {
        setRoomCategory(response.data.data.length);
        console.log(response.data);
        // datas = response.data
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:90/room")
      .then((response) => {
        setRooms(response.data.data.length);
        console.log(response.data);
        // datas = response.data
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:90/food_category")
      .then((response) => {
        setFoodCategory(response.data.data.length);
        console.log(response.data);
        // datas = response.data
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:90/food")
      .then((response) => {
        setFood(response.data.data.length);
        console.log(response.data);
        // datas = response.data
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          <div class="card mb-3 dashboard-card-bootstrap">
            <div class="row g-0">
              <div class="col-md-5">
                <div className="featured">
                  <div className="bottom">
                    <div className="featuredChart p-4">
                      <CircularProgressbar
                        value={order}
                        text={order}
                        strokeWidth={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 class="card-title text-center">
                    Orders '  <i class="fas fa-shopping-cart"></i>
                  </h3>
                  <p class="card-text text-center font-admin">{order}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 dashboard-card-bootstrap">
            <div class="row g-0">
              <div class="col-md-5">
                <div className="featured">
                  <div className="bottom">
                    <div className="featuredChart p-4">
                      <CircularProgressbar
                        value={room}
                        text={room}
                        strokeWidth={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 class="card-title text-center">
                     Rooms <i class="fas fa-bed"></i>
                  </h3>
                  <p class="card-text text-center font-admin">{room}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 dashboard-card-bootstrap">
            <div class="row g-0">
              <div class="col-md-5">
                <div className="featured">
                  <div className="bottom">
                    <div className="featuredChart p-4">
                      <CircularProgressbar
                        value={roomCategory}
                        text={roomCategory}
                        strokeWidth={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 class="card-title text-center">
                    Room Category
                  </h3>
                  <p class="card-text text-center font-admin">{roomCategory}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 dashboard-card-bootstrap">
            <div class="row g-0">
              <div class="col-md-5">
                <div className="featured">
                  <div className="bottom">
                    <div className="featuredChart p-4">
                      <CircularProgressbar
                        value={food}
                        text={food}
                        strokeWidth={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 class="card-title text-center">
                    Foods <i class="fas fa-utensils"></i>
                  </h3>
                  <p class="card-text text-center font-admin">{food}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 dashboard-card-bootstrap">
            <div class="row g-0">
              <div class="col-md-5">
                <div className="featured">
                  <div className="bottom">
                    <div className="featuredChart p-4">
                      <CircularProgressbar
                        value={foodCategory}
                        text={foodCategory}
                        strokeWidth={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 class="card-title text-center">
                    Food Category
                  </h3>
                  <p class="card-text text-center font-admin">{foodCategory}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 dashboard-card-bootstrap">
            <div class="row g-0">
              <div class="col-md-5">
                <div className="featured">
                  <div className="bottom">
                    <div className="featuredChart p-4">
                      <CircularProgressbar
                        value={staffData}
                        text={staffData}
                        strokeWidth={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 class="card-title text-center">
                    Staffs <i class="fas fa-user-friends"></i>
                  </h3>
                  <p class="card-text text-center font-admin">{staffData}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 dashboard-card-bootstrap">
            <div class="row g-0">
              <div class="col-md-5">
                <div className="featured">
                  <div className="bottom">
                    <div className="featuredChart p-4">
                      <CircularProgressbar
                        value={reservation}
                        text={reservation}
                        strokeWidth={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 class="card-title text-center">
                    Reservations <i class="fas fa-address-book"></i>
                  </h3>
                  <p class="card-text text-center font-admin">{reservation}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 dashboard-card-bootstrap">
            <div class="row g-0">
              <div class="col-md-5">
                <div className="featured">
                  <div className="bottom">
                    <div className="featuredChart p-4">
                      <CircularProgressbar
                        value={userData}
                        text={userData}
                        strokeWidth={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 class="card-title text-center">
                    Customers <i class="fas fa-user-friends"></i>
                  </h3>
                  <p class="card-text text-center font-admin">{userData}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
