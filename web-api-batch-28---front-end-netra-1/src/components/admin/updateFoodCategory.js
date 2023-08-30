import "../../css/addFoodCategory.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateFoodCategory = () => {
  const { fcid } = useParams();
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminTicket"),
    },
  };

  const [category_name, setCategoryName] = useState("");
  const [desc, setDesc] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:90/food_category/display_single/" + fcid, config)
      .then((response) => {
        console.log(response);
        setCategoryName(response.data.data.category_name);
        setDesc(response.data.data.desc);
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
      const newRoomCat = {
        ...info,
        category_name: category_name,
        desc: desc,
      };

      await axios
        .put(
          "http://localhost:90/food_category/update/" + fcid,
          newRoomCat,
          config
        )
        .then(() => {
          window.location.replace("/food_category");
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
            <div className="right">
              <form>
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
              </form>
              <button
                className="main-btn add-food-category mt-4"
                onClick={handleClick}
              >
                Send
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

export default UpdateFoodCategory;
