import "../../css/addRoom.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../formSource";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRoom = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [fetchedCatId, setFetchedCatId] = useState("");
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch(
    "http://localhost:90/room_category"
  );

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminTicket"),
    },
  };

  console.log(fetchedCatId);

  const handleClick = async (e) => {
    e.preventDefault();
    const room_numbers = rooms.split(",").map((room) => ({ number: room }));

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dlv1pm7mv/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newRoom = {
        ...info,
        room_image: url,
        room_numbers,
      };

      console.log(newRoom);

      await axios
        .post(
          `http://localhost:90/room/insert/${fetchedCatId}`,
          newRoom,
          config
        )
        .then(() => {
          window.location.replace("/room");
          toast.success("Added success");
        })
        .catch((e) => {
          toast.failed("Failed to add");
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>Add New Room</h1>
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

                {roomInputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      onChange={handleChange}
                    />
                  </div>
                ))}
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
                          <option key={rCat._id} value={rCat._id}>
                            {rCat.category_name}
                          </option>
                        ))}
                  </select>
                </div>
              </form>
              <button className="main-btn mt-4" onClick={handleClick}>
                Add Room
              </button>
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

export default AddRoom;
