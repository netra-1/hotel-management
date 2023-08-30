import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const StaffProfile = ()=>{

    const [userData, setUserData] = useState('');

    const config = {
        headers : {
            Authorization : "Bearer " + localStorage.getItem('staffTicket'),
        }
    }

    useEffect(()=>{
        axios.get('http://localhost:90/staff/profile',config)
        .then((response)=>{
            setUserData(response.data);
            console.log(response.data);
            // datas = response.data
        })
        .catch((e)=>{
            console.log(e);
        })
    },[])


    return (
        <>
            <section className="bg-light">
                <div class="container py-3">
                    <div class="row">
                    <div class="col-lg-4 profile-bootstrap-hover">
                        <div class="card mb-4">
                        <div class="card-body text-center">
                            <img src={userData.image} alt="avatar"
                            class="rounded-circle img-fluid profile_image_bootstrap" />
                            <h5 class="my-3">{userData.fname + ' '+ userData.lname}</h5>
                            <p class="text-muted mb-1">{userData.email}</p>
                            <p class="text-muted mb-4">{userData.address}</p>
                        <div><Link class="main-btn" type="submit" to='/staff/profile_update'>Update profile</Link></div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-8 profile-bootstrap-hover">
                        <div class="card mb-4">
                        <div class="card-body">
                            <h3 className="text-center">Staff Profile</h3>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Full Name</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{userData.fname + ' '+ userData.lname}</p>
                            </div>
                            </div>
                            <hr />
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Email</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{userData.email}</p>
                            </div>
                            </div>
                            <hr />
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Username</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{userData.username}</p>
                            </div>
                            </div>
                            <hr />
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Mobile</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{userData.phone}</p>
                            </div>
                            </div>
                            <hr/>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Gender</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{userData.gender}</p>
                            </div>
                            </div>
                            <hr/>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Department</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{userData.department}</p>
                            </div>
                            </div>
                            <hr />
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Age</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{userData.age}</p>
                            </div>
                            </div>
                            <hr/>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Address</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{userData.address}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    )
}

export default StaffProfile;