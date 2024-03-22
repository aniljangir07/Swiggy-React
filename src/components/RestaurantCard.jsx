import { IMAGINARY_IMG_PATH } from "../utils/constants";
const RestaurantCard = (props) => {
      let {name,avgRatingString,cuisines,sla,cloudinaryImageId} = props.resData?.info ? props.resData?.info : props.resData;
      cuisines = (Array.isArray(cuisines) && cuisines.length > 0) ? cuisines : [];
      let cloudinaryImageIdPath = IMAGINARY_IMG_PATH+cloudinaryImageId;

      return (
            <div className="restaurant-card">
                  <img className="restaurant-logo" src={cloudinaryImageIdPath} alt="Restaurant-Image" />
                  <h3 className="restaurant-details">{name?name:''}</h3>
                  <h5 className="restaurant-details">{cuisines.join(', ')}</h5>
                  <h5 className="restaurant-details">{avgRatingString}</h5>
                  <h5 className="restaurant-details">{sla?.slaString}</h5>
            </div>
      )
};

export default RestaurantCard;