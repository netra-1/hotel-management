import "../../css/list.css";
import HeaderTest from "./SearchBox";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import RoomCard from "./roomCard";
import useFetch from "../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [roomCateg, setRoomCateg] = useState(location.state.roomCateg);
  const [dates, setDates] = useState(location.state.dates);
  // console.log(dates)
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:90/room_category/${roomCateg}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <HeaderTest type="list" />
      <section className="bg-light">
      <h3 className="text-center">Book the best rooms in town</h3>
        <div class="container py-3">
          <div class="row">
            <div class="col-lg-3 profile-bootstrap-hover">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">

                  <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                      <label className="text-light">Destination</label>
                      <input
                        placeholder={roomCateg}
                        onChange={(e) => setRoomCateg(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div className="lsItem">
                      <label className="text-light">Check-in Date</label>
                      <span onClick={() => setOpenDate(!openDate)}>{`${format(
                        dates[0].startDate,
                        "MM/dd/yyyy"
                      )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                      {openDate && (
                        <DateRange
                          onChange={(item) => setDates([item.selection])}
                          minDate={new Date()}
                          ranges={dates}
                        />
                      )}
                    </div>
                    <div className="lsItem">
                      <label className="text-light">Options</label>
                      <div className="lsOptions">
                        <div className="lsOptionItem">
                          <span className="lsOptionText">Adult</span>
                          <input
                            type="number"
                            min={1}
                            className="lsOptionInput"
                            placeholder={options.adult}
                          />
                        </div>
                        <div className="lsOptionItem">
                          <span className="lsOptionText">Children</span>
                          <input
                            type="number"
                            min={0}
                            className="lsOptionInput"
                            placeholder={options.children}
                          />
                        </div>
                        <div className="lsOptionItem">
                          <span className="lsOptionText">Room</span>
                          <input
                            type="number"
                            min={1}
                            className="lsOptionInput"
                            placeholder={options.room}
                          />
                        </div>
                      </div>
                    </div>
                    <button className="main-btn" onClick={handleClick}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 profile-bootstrap-hover">
            <div className="listResult">
              {loading ? (
                "loading"
              ) : (
                <>
                  {data.map(
                    (item) => (
                      console.log(data), (<RoomCard item={item} key={item._id} />)
                    )
                  )}
                </>
              )}
            </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default List;
