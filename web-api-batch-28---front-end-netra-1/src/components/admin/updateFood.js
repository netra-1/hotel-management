import "../../css/addRoom.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { roomInputs } from "../formSource";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateFood = () => {
  const { fid } = useParams();
  const [fetchedCatId, setFetchedCatId] = useState("");

  const { data, loading, error } = useFetch(
    "http://localhost:90/food_category"
  );

  const [food_name, setFoodName] = useState("");
  const [short_desc, setShortDesc] = useState("");
  const [food_desc, setFoodDesc] = useState("");
  const [food_price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState("");
  const [food_image, setFoodImage] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminTicket"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:90/food/display_single/" + fid, config)
      .then((response) => {
        console.log(response);
        setFoodName(response.data.data.food_name);
        setShortDesc(response.data.data.short_desc);
        setFoodDesc(response.data.data.food_desc);
        setPrice(response.data.data.food_price);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //   console.log(fetchedCatId)

  const handleClick = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("food_name", food_name);
    data.append("short_desc", short_desc);
    data.append("food_desc", food_desc);
    data.append("food_price", food_price);
    data.append("food_image", food_image);
    data.append("food_category", fetchedCatId);

    try {
      await axios
        .put("http://localhost:90/food/update/" + fid, data, config)
        .then((response) => {
          console.log(response.data.msg);
          window.location.replace("/food");
          toast.success("Updated success");
        })
        .catch((e) => {
          toast.failed("Failed to update");
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
            <h1>Update Food</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  food_image
                    ? URL.createObjectURL(food_image)
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
                    onChange={(e) => {
                      setFoodImage(e.target.files[0]);
                    }}
                    style={{ display: "none" }}
                  />
                </div>

                <div className="formInput" key="food_name">
                  <label>Food Name</label>
                  <input
                    id="food_name"
                    type="text"
                    placeholder="Enter food name"
                    value={food_name}
                    onChange={(e) => setFoodName(e.target.value)}
                  />
                </div>
                <div className="formInput" key="short_desc">
                  <label>Featured Description</label>
                  <input
                    id="short_desc"
                    type="text"
                    value={short_desc}
                    placeholder="Enter featured description"
                    onChange={(e) => setShortDesc(e.target.value)}
                  />
                </div>
                <div className="formInput" key="food_desc">
                  <label>Description</label>
                  <input
                    id="food_desc"
                    type="text"
                    value={food_desc}
                    placeholder="Enter description"
                    onChange={(e) => setFoodDesc(e.target.value)}
                  />
                </div>
                <div className="formInput" key="food_price">
                  <label>Food Price</label>
                  <input
                    id="food_price"
                    type="text"
                    value={food_price}
                    placeholder="Enter food price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Choose a food category</label>
                  <select
                    id="fetchedCatId"
                    onChange={(e) => setFetchedCatId(e.target.value)}
                  >
                    {loading
                      ? "loading"
                      : data &&
                        data.map((fCat) => (
                          <option key={fCat._id} value={fCat.name}>
                            {fCat.category_name}
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

export default UpdateFood;
