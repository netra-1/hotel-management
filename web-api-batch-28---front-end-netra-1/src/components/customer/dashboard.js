import axios from "axios";
import {Link} from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/core";
import SearchBox from "../customer/SearchBox";
import carousel1 from "../../images/carousel/carousel.jpg";
import carousel2 from "../../images/carousel/carousel1.jpg";
import carousel3 from "../../images/carousel/carousel4.jpg";
import "../../css/services.css";
import { useEffect, useState } from "react";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);


const Dashboard = () => {
    
    const [userData, setUserData] = useState('');
    // console.log(userData)

    const config = {
        headers : {
            Authorization : "Bearer " + localStorage.getItem('customerTicket'),
        }
    }

    useEffect(()=>{
        axios.get('http://localhost:90/customer/profile',config)
        .then((response)=>{
            setUserData(response.data);
            console.log(response.data);
            // datas = response.data
        })
        .catch((e)=>{
            console.log(e);
        })
    },[])
  return (
    <>
      <div id="home" className="banner_wrapper p-0">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
              slidesPerView={1}
              direction="vertical"
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              autoplay={{ delay: 1700 }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div
                  className="swiper-slide"
                  style={{ backgroundImage: `url(${carousel1})` }}
                >
                  <div className="slide-caption text-center">
                    <div>
                      <h3 className="text-light"> Dear {userData.email},</h3>
                      <h1>Welcome to Travelodge</h1>
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim
                      </p>
                      <div className="mt-3 mt-lg-0">
                        <a className="main-btn" href="#">
                          Explore rooms
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide"
                  style={{ backgroundImage: `url(${carousel2})` }}
                >
                  <div className="slide-caption text-center">
                    <div>
                      <h3 className="text-light"> Dear {userData.email},</h3>
                      <h1>Welcome to Travelodge</h1>
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim{" "}
                      </p>
                      <div className="mt-3 mt-lg-0">
                        <a className="main-btn" href="#">
                          Explore rooms
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide"
                  style={{ backgroundImage: `url(${carousel3})` }}
                >
                  <div className="slide-caption text-center">
                    <div>
                      <h3 className="text-light"> Dear {userData.email},</h3>
                      <h1>Welcome to Travelodge</h1>
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim{" "}
                      </p>
                      <div className="mt-3 mt-lg-0">
                        <a className="main-btn" href="#">
                          Explore rooms
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

      <SearchBox />

      {/* rooms */}

      <section id="rooms" class="rooms_wrapper">
        <div class="container-fluid px-4">
          <div class="row">
            <div class="col-sm-12 text-center mb-2">
              <h3>Our Featured Rooms</h3>
              <p className="room-p"> Explore our best rooms </p>
            </div>
          </div>
          <div class="row m-0">
            <div class="col-md-4 mb-4 mb-lg-0">
              <div class="room-item">
                <img
                  src={require("../../images/room/room.jpg")}
                  class="img-fluid"
                />
                <div class="room-item-wrap">
                  <div class="room-content">
                    <h5 class="text-white mb-lg-4 text-decoration-underline">
                      Normal Room
                    </h5>
                    <p class="text-white">
                      Discover five of our favourite dresses from our new
                      collection that are destined to be worn and loved
                      immediately
                    </p>
                    <p class="text-white fw-bold mt-lg-3">Rs. 1220 / Per Night</p>
                    <a class="main-btn text-white mt-lg-4" href="#">
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4 mb-lg-0">
              <div class="room-item">
                <img
                  src={require("../../images/room/room4.jpg")}
                  class="img-fluid"
                />
                <div class="room-item-wrap">
                  <div class="room-content">
                    <h5 class="text-white mb-lg-4 text-decoration-underline">
                      Delux Room
                    </h5>
                    <p class="text-white">
                      Discover five of our favourite dresses from our new
                      collection that are destined to be worn and loved
                      immediately
                    </p>
                    <p class="text-white fw-bold mt-lg-3">Rs. 1300 / Per Night</p>
                    <a class="main-btn text-white mt-lg-4" href="#">
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4 mb-lg-0">
              <div class="room-item">
                <img
                  src={require("../../images/room/room5.jpg")}
                  class="img-fluid"
                />
                <div class="room-item-wrap">
                  <div class="room-content">
                    <h5 class="text-white mb-lg-4 text-decoration-underline">
                      Ac rooms
                    </h5>
                    <p class="text-white">
                      Discover five of our favourite dresses from our new
                      collection that are destined to be worn and loved
                      immediately
                    </p>
                    <p class="text-white fw-bold mt-lg-3">Rs. 1000 / Per Night</p>
                    <a class="main-btn text-white mt-lg-4" href="#">
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* foods */}
      <section id="explore-food">
        <div class="explore-food wrapper">
          <div class="container-fluid px-4">
            <div class="row">
              <div class="col-sm-12">
                <div class="text-content text-center">
                  <h3>Explore Our Foods</h3>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et purus a odio finibus bibendum in sit amet leo.
                    Mauris feugiat erat tellus. Far far away, behind the word
                    mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in
                    Bookmarksgrove.
                  </p>
                </div>
              </div>
            </div>
            <div class="row m-0">
              <div class="col-md-4 mb-4 mb-lg-0">
                <div class="room-item">
                  <img
                    src={require("../../images/food/food.jpg")}
                    class="img-fluid"
                  />
                  <div class="room-item-wrap">
                    <div class="room-content">
                      <h5 class="text-white mb-lg-4 text-decoration-underline">
                        Chicken Burger
                      </h5>
                      <p class="text-white">
                        Discover five of our favourite dresses from our new
                        collection that are destined to be worn and loved
                        immediately
                      </p>
                      <p class="text-white fw-bold mt-lg-3">Rs. 220</p>
                      <a class="main-btn text-white mt-lg-4" href="#">
                        Book now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4 mb-lg-0">
                <div class="room-item">
                  <img
                    src={require("../../images/food/food1.jpg")}
                    class="img-fluid"
                  />
                  <div class="room-item-wrap">
                    <div class="room-content">
                      <h5 class="text-white mb-lg-4 text-decoration-underline">
                        Chicken Pizza
                      </h5>
                      <p class="text-white">
                        Discover five of our favourite dresses from our new
                        collection that are destined to be worn and loved
                        immediately
                      </p>
                      <p class="text-white fw-bold mt-lg-3">Rs. 400</p>
                      <a class="main-btn text-white mt-lg-4" href="#">
                        Book now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4 mb-lg-0">
                <div class="room-item">
                  <img
                    src={require("../../images/food/food2.jpg")}
                    class="img-fluid"
                  />
                  <div class="room-item-wrap">
                    <div class="room-content">
                      <h5 class="text-white mb-lg-4 text-decoration-underline">
                        Khana Set
                      </h5>
                      <p class="text-white">
                        Discover five of our favourite dresses from our new
                        collection that are destined to be worn and loved
                        immediately
                      </p>
                      <p class="text-white fw-bold mt-lg-3">Rs. 700</p>
                      <a class="main-btn text-white mt-lg-4" href="#">
                        Book now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
