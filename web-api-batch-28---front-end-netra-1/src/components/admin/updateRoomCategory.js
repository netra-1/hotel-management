import "../../css/addRoomCategory.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateRoomCategory = () => {
  const { rcatid } = useParams();
  const [files, setFiles] = useState("");
  // const [rooms, setRooms] = useState([]);
  const [info, setInfo] = useState({});

  // const { data, loading, error } = useFetch("http://localhost:90/room");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminTicket"),
    },
  };

  const [category_name, setCategoryName] = useState("");
  const [short_desc, setShortDesc] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [featured, setFeatured] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:90/room_category/display_single/" + rcatid, config)
      .then((response) => {
        console.log(response);
        setCategoryName(response.data.data.category_name);
        setShortDesc(response.data.data.short_desc);
        setDesc(response.data.data.desc);
        setPrice(response.data.data.price);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
        category_name: category_name,
        short_desc: short_desc,
        desc: desc,
        price: price,
      };

      await axios
        .put(
          "http://localhost:90/room_category/update/" + rcatid,
          newRoomCat,
          config
        )
        .then(() => {
          window.location.replace("/room_category");
          toast.success("Updated success");
        })
        .catch((e) => {
          toast.failed("Failed to update");
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>Update Room Category</h1>
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

                <div className="formInput" key="short_desc">
                  <label>Featured Description</label>
                  <input
                    id="short_desc"
                    onChange={(e) => {
                      setShortDesc(e.target.value);
                    }}
                    type="text"
                    value={short_desc}
                  />
                </div>

                <div className="formInput" key="category_name">
                  <label>Category Name</label>
                  <input
                    id="category_name"
                    onChange={(e) => {
                      setCategoryName(e.target.value);
                    }}
                    type="text"
                    value={category_name}
                  />
                </div>

                <div className="formInput" key="desc">
                  <label>Description</label>
                  <input
                    id="desc"
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    type="text"
                    value={desc}
                  />
                </div>

                <div className="formInput" key="price">
                  <label>Price</label>
                  <input
                    id="price"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="text"
                    value={price}
                  />
                </div>

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
                <button className="main-btn" onClick={handleClick}>
                  Send
                </button>
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

export default UpdateRoomCategory;
