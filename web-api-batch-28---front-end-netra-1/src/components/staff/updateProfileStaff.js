import "../../css/addRoom.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect,useState } from "react";
import { roomInputs } from "../formSource";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileUpdateStaff = () => {

  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  
  const [fname, setFname]= useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');


  const config = {
    headers : {
        Authorization : "Bearer " + localStorage.getItem('staffTicket'),
    }
  }

  useEffect(()=>{
    axios.get("http://localhost:90/staff/profile", config)
    .then((response)=>{
        console.log(response);
        setFname(response.data.fname)
        setLname(response.data.lname)
        setUsername(response.data.username)
        setAge(response.data.age)
        setDepartment(response.data.department)
        setEmail(response.data.email)
        setAddress(response.data.address)
        setGender(response.data.gender)
        setPhone(response.data.phone)
    })
    .catch((e)=>{
        console.log(e);
    })
  },[])


  const handleClick = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");

    try{
        const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dlv1pm7mv/image/upload",
            data
        );
        
        const { url } = uploadRes.data;
        
        const newData = {
        ...info,
        image: url,
        fname: fname,
        lname: lname,
        username: username,
        age: age,
        address: address,
        gender: gender,
        phone: phone,
        department: department,
        };
    
        await axios.put('http://localhost:90/staff/update', newData, config)
        .then(()=>{
          window.location.replace('/staff_profile')
          toast.success('Profile updated successfully!')
          
        })
        .catch();
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
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput" key = "fname">
                  <label>First Name</label>
                  <input id= 'fname' onChange={(e)=>{setFname(e.target.value)}} type='text' value = {fname} />
              </div>
              <div className="formInput" key = "lname">
                  <label>Last Name</label>
                  <input id= 'lname' onChange={(e)=>{setLname(e.target.value)}} type='text' value = {lname} />
              </div> 
              <div className="formInput" key = "username">
                  <label>Username</label>
                  <input id= 'username' onChange={(e)=>{setUsername(e.target.value)}} type='text' value = {username} />
              </div> 
              <div className="formInput" key = "email">
                  <label>Email address</label>
                  <input id= 'email' type='text' value = {email} disabled/>
              </div> 
              <div className="formInput" key = "age">
                  <label>Age</label>
                  <input id= 'age' onChange={(e)=>{setAge(e.target.value)}} type='number' value = {age} />
              </div>
              <div className="formInput" key = "address">
                  <label>Address</label>
                  <input id= 'address' onChange={(e)=>{setAddress(e.target.value)}} type='text' value = {address} />
              </div>
              <div className="formInput" key = "phone">
                  <label>Department</label>
                  <input id= 'department' onChange={(e)=>{setDepartment(e.target.value)}} type='text' value = {department} />
              </div>
              <div className="formInput" key = "gender">
                  <label>Gender</label>
                  <input id= 'gender' onChange={(e)=>{setGender(e.target.value)}} type='text' value = {gender} />
              </div>
              <div className="formInput" key = "phone">
                  <label>Phone</label>
                  <input id= 'phone' onChange={(e)=>{setPhone(e.target.value)}} type='number' value = {phone} />
              </div>
            </form>
              <button className="main-btn mt-4" onClick={handleClick}>Update profile</button>
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

export default ProfileUpdateStaff;