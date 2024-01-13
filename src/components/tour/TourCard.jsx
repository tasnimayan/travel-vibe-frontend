import { Link } from "react-router-dom";
import "./tourCard.css";


const TourCard = () => {
  let item = {
    _id:"20014", photos:['https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg'], name:"Sunflower place", distance:250, desc:"Description", rating:4.5, cheapestPrice:450
}
  return (
    <div className="searchItem bg-white rounded-xl shadow-lg border">
      <img src={item.photos[0]} alt="" className="siImg rounded-lg" />
      
      <div className="siDesc border">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/tours/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
