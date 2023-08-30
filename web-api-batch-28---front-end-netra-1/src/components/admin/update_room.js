import "../../css/addRoom.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect,useState } from "react";
import { roomInputs } from "../formSource";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateRoom = () => {
  const {rid} = useParams();

  const [file, setFile] = useState("");
  // const [finalNumber, setFinalNmber] = useState("");

  const [info, setInfo] = useState({});
  const [fetchedCatId, setFetchedCatId] = useState('');
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("http://localhost:90/room_category");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const config = {
    headers : {
        Authorization : "Bearer " + localStorage.getItem('adminTicket'),
    }
  }
  const [room_title, setRoomTitle]= useState('');
  const [room_desc, setDescription] = useState('');
  const [room_price, setPrice] = useState('');
  const [max_people, setMaxPeople] = useState('')
  // const [room_numbers, setRoomNumbers] = useState([]);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState('');


  // rooms.map((final_number)=>{
  //   return setFinalNmber(final_number.number)
  // })

  useEffect(() => {
    axios
      .get("http://localhost:90/room/display_single/" + rid, config)
      .then((response) => {
        console.log(response);
        setRoomTitle(response.data.data.room_title);
        setDescription(response.data.data.room_desc);
        setPrice(response.data.data.room_price);
        setMaxPeople(response.data.data.max_people);
        // setRooms(response.data.data.room_numbers);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);


  const handleClick = async (e) => {
    e.preventDefault();
    const room_numbers = rooms.split(",").map((room) => ({ number: room }));

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");


    try{
        const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dlv1pm7mv/image/upload",
            data
        );
        
        const { url } = uploadRes.data;
        
        const newRoom = {
        ...info,
        room_image: url,
        room_numbers,
        room_title : room_title,
        room_price : room_price,
        room_desc : room_desc,
        max_people : max_people,
        };

        console.log(newRoom);
    
        await axios.put(`http://localhost:90/room/update/${rid}`, newRoom, config)
        .then(()=>{
          window.location.replace('/room');
          toast.success('Updated success')
        })
        .catch((e)=>{
          toast.failed('Failed to update')
        });;
    }catch(e){
        console.log(e)
    }
  };

  return (
    <>
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Update Room</h1>
        </div>
        <div className="bottom">
        <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {/* {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))} */}
              <div className="formInput" key = "room_desc">
                  <label>Room Description</label>
                  <input id= 'room_desc' onChange={(e)=>{setDescription(e.target.value)}} type='text' value = {room_desc} />
              </div>    

              <div className="formInput" key = "room_title">
                  <label>Room Title</label>
                  <input id= 'room_title' onChange={(e)=>{setRoomTitle(e.target.value)}} type='text' value = {room_title} />
              </div> 
              <div className="formInput" key = "room_price">
                  <label>Price</label>
                  <input id= 'room_price' onChange={(e)=>{setPrice(e.target.value)}} type='number' value = {room_price} />
              </div> 
              <div className="formInput" key = "max_people">
                  <label>Maximum People</label>
                  <input id= 'max_people' onChange={(e)=>{setMaxPeople(e.target.value)}} type='number' value = {max_people} />
              </div>

              <div className="formInput">
                <label>Rooms</label>
                <input
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Give comma between room numbers."
                />
              </div>
              <div className="formInput">
                <label>Choose a room category</label>
                <select
                  id="fetchedCatId"
                  onChange={(e) => setFetchedCatId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((rCat) => (
                        <option key={rCat._id} value={rCat._id}>{rCat.category_name}</option>
                      ))}
                </select>
              </div>
            </form>
              <button className="main-btn mt-4" onClick={handleClick}>Update Room</button>
          </div>
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

export default UpdateRoom;



