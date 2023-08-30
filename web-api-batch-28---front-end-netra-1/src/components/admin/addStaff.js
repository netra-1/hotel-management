import "../../css/addRoom.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { staffInputs } from "../formSource";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStaff = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dlv1pm7mv/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newStaff = {
        ...info,
        image: url,
      };

      await axios
        .post("http://localhost:90/staff/register", newStaff)
        .then(() => {
          window.location.replace("/all_staff");
          toast.success("Staff added success");
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
            <h1>Add New Staff</h1>
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

                {staffInputs.map((input) => (
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
              </form>
              <button className="main-btn mt-4" onClick={handleClick}>
                Add Staff
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

export default AddStaff;
