import axios from "axios";
import { useEffect, useState } from "react";
import '../../css/room.css'
import SearchBox from "../customer/SearchBox";

import {Link} from "react-router-dom";

const ShowRoom =()=>{
    const [roomData, setRoomData] = useState([]);
  const [query, setQuery] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:90/room')
        .then((response)=>{
            setRoomData(response.data.data);
            console.log(response.data.data);
        })
        .catch((e)=>{
            console.log(e);
        })
    },[])
      
    return (
        <>
        <div className="container-fluid px-0 room-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                    <h1 className="room-h1">
                        Explore <br /> Travelodge's <span>Room</span>
                    </h1>
                    <h2 className="room-h2">Book and enjoy our hospitality</h2>
                    <p>
                        Book rooms and stay connected to us!!!
                    </p>
                    </div>
                </div>
            </div>
        </div>

        <SearchBox/>

        {/* displaying rooms */}
        <div className="container room-below-search">
        <div class="row">
            <div class="col-sm-12">
                <div class="text-content text-center">
                    <h3>Rooms We Have</h3>
                    <p className="below-banner-room-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et purus a odio finibus bibendum in sit amet leo.
                    Mauris feugiat erat tellus. Far far away, behind the word
                    mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in
                    Bookmarksgrove.
                    </p>
                </div>
            </div>
        </div>
        </div>



        <section class="room_data">
            <div class="container-fluid px-5">
            <div className="row mt-4">
              <div className="col-md-3">
                <input type={"text"} placeholder = "Search food....." className="form-control rounded" onChange={(e)=>setQuery(e.target.value)} />
              </div>
            </div>
                <div class="row pt-3">
                {roomData.filter((item)=> item.room_title.toLowerCase().includes(query)).map((item)=>{
                    const list = (
                        // <div className="col-lg-3 col-md-6 mb-lg-0 food-card-padding">
                        //     <div className="card">
                        //         <img src = {item.room_image} alt='RoomImage' />
                        //         <div className="pt-3 px-2">
                        //             <h4>{item.room_title}</h4>
                        //             <div className="pb-2">
                        //                 <span className="me-4 room_price_css">Rs. {item.room_price}</span>
                        //                 <Link className="my-btn" type="submit" to={'/room/single/'+item._id}>Read More</Link>
                        //             </div>
                        //             <p>
                        //                 <Link className="btn btn-outline-success" type="submit" to={'/update_room/'+item._id}>Update</Link>
                        //                 <Link className="btn btn-outline-primary ms-2" type="submit" to={'/room/single/'+item._id}>Read More</Link>
                        //                 <Link className="btn btn-outline-danger ms-2" onClick={()=>{deleteRoom(item._id)}} to={''}>Delete</Link>
                        //             </p> 
                        //         </div>
                        //     </div>
                        // </div>

                        <div class="col-md-4 mb-4 mb-lg-0 my-cart-room">
                            <div class="room-item">
                            <img
                                src={item.room_image}
                                class="img-fluid"
                            />
                            <div class="room-item-wrap">
                                <div class="room-content">
                                <h5 class="text-white mb-lg-4 text-decoration-underline">
                                    {item.room_title}
                                </h5>
                                <p class="text-white">
                                    {item.room_desc}
                                </p>
                                <p class="text-white fw-bold mt-lg-3">Rs. {item.room_price}</p>
                                <Link className="main-btn" type="submit" to={'/room/display_single/'+item._id}>Read More</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    );
                    return list;
                })}
                    
                </div>
            </div>
        </section>

    </>
    )
}
export default ShowRoom;