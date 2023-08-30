import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/food.css";
import {Link, useParams} from "react-router-dom";

const Food = () => {
  // const { food_id } = useParams();
  const [roomData, setRoomData] = useState([]);
  const [set_message, setMessage] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(()=>{
    axios.get('http://localhost:90/food')
    .then((response)=>{
        setRoomData(response.data.data);
        console.log(response.data.data);
    })
    .catch((e)=>{
        console.log(e);
    })
  },[])



  return (
    <>
      {/* top */}
      <div className="container-fluid px-0 food-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h1 className="food-h1">
                Explore <br /> Travelodge's <span>Foods</span>
              </h1>
              <h2 className="food-h2">Enjoy our foods and service</h2>
              <p>Food will be served at your doorstep!!</p>
              <div className="mt-4">
                <a className="main-btn" href="#explore-food">
                  Order now <i className="fas fa-shopping-basket ps-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* foods */}
      <section id="explore-food">
        <div class="explore-food wrapper">
          <div class="container-fluid px-5">
            <div class="row">
              <div class="col-sm-12">
                <div class="text-content text-center">
                  <h3>Explore Our Foods</h3>
                  {/* <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et purus a odio finibus bibendum in sit amet leo.
                    Mauris feugiat erat tellus. Far far away, behind the word
                    mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in
                    Bookmarksgrove.
                  </p> */}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <input type={"text"} placeholder = "Search food....." className="form-control rounded" onChange={(e)=>setQuery(e.target.value)} />
              </div>
            </div>

            <div class="row pt-4">
            {roomData.filter((item)=> item.food_name.toLowerCase().includes(query)).map((item)=>{
              return (
                <>
                <div class="col-md-3 mb-4">
                  <div class="card food-bootstrap-hover specific-food-card">
                  <div class="card-body m-1 remove-padding-my-order">
                      <img src={"http://localhost:90/"+item.food_image} alt="avatar"
                      class="img-fluid food_image_bootstrap" />
                      <h5 class="mt-3 ms-1">{item.food_name}</h5>
                      <p class="text-muted mb-1 ms-1">{item.food_desc}</p>
                      <div className="d-flex justify-content-between me-3">
                      <p class="text-muted mb-2 ms-1">Rs. {item.food_price}</p>
                      <div className="mb-3 ms-1"><Link className="my-btn" type="submit" to={'/food/display_single/'+item._id}>Show more</Link></div>
                      </div>
                  </div>
                  </div>
              </div>
                </>
              );
            })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Food;
