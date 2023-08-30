import "../../css/searchBox.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const SearchBox = ({ type }) => {
  const [roomCateg, setRoomCateg] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { roomCateg, dates, options } });
    navigate("/room_categorys", { state: { roomCateg, dates, options } });
  };

  return (
    <div className="header-name">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-text bg-light">
                      <span className="bg-light">
                        <i class="fas fa-bed"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Room Category..."
                      className="form-control"
                      onChange={(e) => setRoomCateg(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="headerSearchItem">
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-text bg-light">
                      <span className="bg-light">
                        <i class="fas fa-calendar-alt"></i>
                      </span>
                    </div>
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText form-control"
                    >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                      dates[0].endDate,
                      "MM/dd/yyyy"
                    )}`}</span>
                  </div>
                </div>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-text bg-light">
                      <span className="bg-light">
                      <i class="fas fa-user-friends"></i>
                      </span>
                    </div>
                    <span
                      onClick={() => setOpenOptions(!openOptions)}
                      className="headerSearchText form-control"
                    >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                  </div>
                </div>

                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="main-btn" onClick={handleSearch}>
                  Search Rooms
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
