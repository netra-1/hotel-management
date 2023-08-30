import "../../css/categoryDetails.css";
import HeaderTest from "./SearchBox";
import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import Reserve from "./Reserve";
import { Link } from "react-router-dom";


const CategoryDetails = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[3];
  // console.log(id)
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const { data, loading, error } = useFetch(`http://localhost:90/room_category/get/${id}`);

  const { dates, options } = useContext(SearchContext);
  // console.log(dates)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  // console.log(dayDifference(dates[0].endDate, dates[0].startDate));
  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleCLick = () =>{
    if(localStorage.getItem('customerTicket')){
      setOpenModal(true);
    } else{
      navigate("/login")
    }
  }

  return (
    <div>
      <HeaderTest type="list" />
      {loading ? (
        "loading"
      ) : (
        <div>
          {data.map(item=>(
          <div>
            {open && (
              <div className="slider">

                <i class="fas fa-times-circle close" onClick={() => setOpen(false)}></i>

                <i class="fas fa-chevron-circle-left arrow" onClick={() => handleMove("l")}></i>  
                <div className="sliderWrapper">
                  <img src={item.photos[slideNumber]} alt="" className="sliderImg" />
                </div>
                <i class="fas fa-chevron-circle-right arrow" onClick={() => handleMove("r")}></i>
              </div>
            )}
            <section className="bg-light">
                    <div class="container py-3">
                      <div class="row">
                        <div class="col-lg-3 profile-bootstrap-hover">
                          <div class="card mb-4 mb-md-0">
                            <div class="card-body">
                              <p class="mb-4">
                                <span class="text-primary font-italic me-1">Book</span>{" "}
                                the best room
                              </p>
                              <div className="hotelDetailsPrice">
                                  <h1>Perfect for a {days}-night stay!</h1>
                                  <h2>
                                    <b>Rs. {days * item.price * options.room}</b> ({days} nights)
                                  </h2>
                                  <button onClick={handleCLick} className='main-btn'>Book Now!</button>
                                </div>
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
                        <div class="col-lg-8 profile-bootstrap-hover">
                          <div class="card mb-4">
                            <div class="card-body">
                            <h2 className="hotelTitle">{item.category_name}</h2>
                            <span className="hotelPriceHighlight">
                              Book a stay over Rs. {item.price} at this category and enjoy our great hosptality
                            </span>
                            <hr />
                              <div class="row">
                                <div class="col-sm-3">
                                  <p class="mb-0">Category Name</p>
                                </div>
                                <div class="col-sm-9">
                                  <p class="text-muted mb-0">{item.category_name}</p>
                                </div>
                              </div>
                              
                              <hr />
                              <div class="row">
                                <div class="col-sm-3">
                                  <p class="mb-0">Featured Desc</p>
                                </div>
                                <div class="col-sm-9">
                                  <p class="text-muted mb-0">{item.short_desc}</p>
                                </div>
                              </div>
                              <hr />
                              <div class="row">
                                <div class="col-sm-3">
                                  <p class="mb-0">Description</p>
                                </div>
                                <div class="col-sm-9">
                                  <p class="text-muted mb-0">{item.desc}</p>
                                </div>
                              </div>
                              <hr />
                              <div class="row">
                                <div class="col-sm-3">
                                  <p class="mb-0">Price</p>
                                </div>
                                <div class="col-sm-9">
                                  <p class="text-muted mb-0">Rs. {item.price}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-12">
                            <div class="card mb-4">
                              <div class="card-body text-center">
                                <div className="hotelImages">
                                  {item.photos?.map((photo, i) => (
                                    <div className="hotelImgWrapper" key={i}>
                                      <img
                                        onClick={() => handleOpen(i)}
                                        src={photo}
                                        alt=""
                                        className="hotelImg"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
          </div>))}
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} catid={id} />}
    </div>
  );
};

export default CategoryDetails;