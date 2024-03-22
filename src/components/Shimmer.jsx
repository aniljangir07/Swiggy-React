import { FaSearch } from 'react-icons/fa';
const Shimmer = () => {
      return (
            <div>
                  <div className="search-div">
                        <div className="search">
                              <input type="text" placeholder="Search..." />
                              <FaSearch className="search-icon" />
                        </div >
                        <div className="filter-btn">
                              <button className="filter-button">Top Rated Restaurant</button>
                        </div>
                  </div>
                  <div className="shimmer-container">
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                        <div className="restaurant-card shimmer-cards"></div>
                  </div>
            </div>

      );
};

export default Shimmer;