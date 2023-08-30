import "../../css/reserve.css";
import useFetch from "../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reserve = ({ setOpen, catid }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [mrid, setMrid] = useState('');
  const { data, loading, error } = useFetch(`http://localhost:90/reserve_room/${catid}`);
  const { dates } = useContext(SearchContext);

  const config = {
    headers : {
        Authorization : "Bearer " + localStorage.getItem('customerTicket'),
    }
  }

  // console.log(data);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  
  const handleSelect = (e, myrid) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setMrid(myrid)
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  // console.log(selectedRooms)

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.post(`http://localhost:90/rooms/availability/${roomId}`, {
            dates: alldates,
            room_id : mrid,
          }, config);
          return res.data;
        })
      );
      setOpen(false);
      window.location.replace('/my_bookings')
      toast.success("Room booked successfully!");
    } catch (err) {}
  };
  return (
    <>
    <div className="reserve">
      <div className="rContainer">
        <i class="fas fa-times-circle rClose" onClick={() => setOpen(false)}></i>
        <span>Select your rooms:</span>
        {data.map((item) => (
          // console.log(item),
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.room_title}</div>
              <div className="rDesc">{item.room_desc}</div>
              <div className="rMax">
                Max people: <b>{item.max_people}</b>
              </div>
              <div className="rPrice">{item.room_price}</div>
            </div>
            <div className="rSelectRooms">
              {item.room_numbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange= {e => handleSelect(e, item._id)}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
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

export default Reserve;
