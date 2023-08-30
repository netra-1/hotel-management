import "../../css/addFoodCategory.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { foodCategoryInputs } from "../formSource";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFoodCategory = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminTicket"),
    },
  };

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const newFoodCat = {
        ...info,
      };

      await axios
        .post("http://localhost:90/food_category/insert", newFoodCat, config)
        .then(() => {
          window.location.replace("/food_category");
          toast.success("Added success");
        })
        .catch((e) => {
          toast.failed("Failed to add");
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
            <h1>Add Food Category</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form>
                {foodCategoryInputs.map((input) => (
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
              </form>
              <button
                className="main-btn add-food-category mt-4"
                onClick={handleClick}
              >
                Add Category
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

export default AddFoodCategory;
