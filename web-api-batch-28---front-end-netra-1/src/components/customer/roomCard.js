import { Link } from "react-router-dom";
import "../../css/roomCard.css";

const RoomCard = (item) => {
  return (
    <>
      <div class="col-md-12 col-sm-12 order-single-card rounded-4 card mb-5 p-2">
        <div class="row g-0">
          <div class="col-md-5 text-center">
            <img
              src={item.item.photos[0]}
              className="img-fluid order_single_image"
              alt="image"
            />
          </div>
          <div class="col-md-7 border-start border-1">
            <div class="card-body card-body-order">
              <h5> {item.item.category_name}</h5>
              <hr/>
              <p>{item.item.short_desc}</p>
              <p>{item.item.desc}</p>
              <p>Rs. {item.item.price}</p>
              <Link to={`/room_category/get/${item.item._id}`}>
               <button className="main-btn mt-3">See availability</button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="searchItem">
    //   <img
    //     alt=""
    //     src={item.item.photos[0]}
    //     className="siImg"
    //   />
    //   <div className="siDesc">
    //     <h1 className="siTitle">{item.item.category_name}</h1>
    //     <span className="siDistance">{item.item.desc}</span>
    //     <span className="siTaxiOp">Free airport taxi</span>
    //     <span className="siSubtitle">
    //       Studio Apartment with Air conditioning
    //     </span>
    //     <span className="siFeatures">
    //       {item.item.desc}
    //     </span>
    //     <span className="siCancelOp">Free cancellation </span>
    //     <span className="siCancelOpSubtitle">
    //       You can cancel later, so lock in this great price today!
    //     </span>
    //   </div>
    //   <div className="siDetails">
    //     <div className="siRating">
    //       <span>Excellent</span>
    //       <button>8.9</button>
    //     </div>
    //     <div className="siDetailTexts">
    //       <span className="siPrice">$112</span>
    //       <span className="siTaxOp">Includes taxes and fees</span>
    //       <Link to={`/room_category/get/${item.item._id}`}>
    //         <button className="main-btn">See availability</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RoomCard;
