const RestaurantCard = (props) => {
      const {name,rating,cuisines,deliveryTiming,imageUrl} = props.resData;
      return (
            <div className="restaurant-card">
                  <img className="restaurant-logo" src={imageUrl} alt="Restaurant-Image" />
                  <h3 className="restaurant-details">{name?name:''}</h3>
                  <h5 className="restaurant-details">{cuisines.join(', ')}</h5>
                  <h5 className="restaurant-details">{rating}</h5>
                  <h5 className="restaurant-details">{deliveryTiming}</h5>
            </div>
      )
};

export default RestaurantCard;