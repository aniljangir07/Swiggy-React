import RestaurantCard from "./RestaurantCard";
import { FaSearch } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";

const Body = () => {
      let [restaurantList, setRestaurantList] = useState([]);
      let [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

      useEffect(()=>{
            fetchData();
      },[]);

      const fetchData = async ()=>{
            let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1562085&lng=75.8611044&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            
            data = await data.json();
            let listData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurantList(listData);
            setFilteredRestaurantList(listData);
      };

      const [searchText,setSearchText] = useState('');
      

      //Conditional renderin
      return (restaurantList.length==0) ? <Shimmer/> : (
            <div className="body">
                  <div className="search-div">
                        <div className="search">
                              <input type="text" placeholder="Search..." onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}  />
                              <button className="search-btn" 
                                    onClick={()=>{
                                          let filteredRestaurants = restaurantList.filter((items)=>{
                                                return items.info.name.toLowerCase().includes(searchText.toLowerCase())
                                          });
                                          setFilteredRestaurantList(filteredRestaurants)
                                    }}>
                                    <FaSearch className="search-icon" />
                              </button>
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
                              filteredRestaurantList.map((resDetails, index) => {
                                    return <RestaurantCard resData={resDetails} key={index} />
                              })
                        }
                  </div>
            </div>
      )
};

export default Body;