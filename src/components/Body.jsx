import RestaurantCard from "./RestaurantCard";
import { FaSearch } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";

const Body = () => {
      let [restaurantList, setRestaurantList] = useState([]);

      useEffect(()=>{
            fetchData();
      },[]);

      const fetchData = async ()=>{
            let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1562085&lng=75.8611044&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            
            data = await data.json();
            let listData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurantList(listData);
      };

      //Conditional renderin
      return (restaurantList.length==0) ? <Shimmer/> : (
            <div className="body">
                  <div className="search-div">
                        <div className="search">
                              <input type="text" placeholder="Search..." />
                              <FaSearch className="search-icon" />
                        </div >
                        <div className="filter-btn">
                              <button className="filter-button" onClick={(e) => {
                                    restaurantList = restaurantList.filter((res) => { return res.rating > 4 });
                                    setRestaurantList(restaurantList)
                              }}>Top Rated Restaurant</button>
                        </div>
                  </div>
                  <div className="restaurant-container">
                        {
                              restaurantList.map((resDetails, index) => {
                                    return <RestaurantCard resData={resDetails} key={index} />
                              })
                        }
                  </div>
            </div>
      )
};

export default Body;