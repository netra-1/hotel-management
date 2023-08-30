import "../../css/addRoomCategory.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomCategoryInputs } from "../formSource";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddRoomCategory = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});

  const config = {
    headers : {
        Authorization : "Bearer " + localStorage.getItem('adminTicket'),
    }
  }

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dlv1pm7mv/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newRoomCat = {
        ...info,
        // rooms,
        photos: list,
      };

      await axios.post("http://localhost:90/room_category/insert", newRoomCat, config)
      .then(()=>{
        window.location.replace('/room_category');
        toast.success('Added success')
      })
      .catch((e)=>{
        toast.failed('Failed to add')
      });
    } catch (err) {console.log(err)}
  };
  return (
    <>
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Add Room Category</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
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
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {roomCategoryInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              {/* <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.room_title}
                        </option>
                      ))}
                </select>
              </div> */}
              <button className="main-btn" onClick={handleClick}>Add Category</button>
            </form>
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

export default AddRoomCategory;
