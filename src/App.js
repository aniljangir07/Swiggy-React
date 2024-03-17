import React from "react";
import ReactDOM from "react-dom/client";
import { FaSearch } from 'react-icons/fa';

const resList = [
      {
            name: "Bella Italia",
            rating: getRandomRating(),
            cuisines: ["Italian", "Pizza", "Pasta"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
      },
      {
            name: "Taco Loco",
            rating: getRandomRating(),
            cuisines: ["Mexican", "Tacos", "Burritos"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/flwi3i3dggmruc0msjru"
      },
      {
            name: "Sushi Express",
            rating: getRandomRating(),
            cuisines: ["Japanese", "Sushi", "Seafood"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lj1lyurvcgjchpwxpt7q"
      },
      {
            name: "Spice Garden",
            rating: getRandomRating(),
            cuisines: ["Indian", "Curry", "Tandoori"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/plrv2rlxc22xdof3bwlf"
      },
      {
            name: "Golden Wok",
            rating: getRandomRating(),
            cuisines: ["Chinese", "Stir-fry", "Dumplings"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jopdgt9qeojd26rn0atj"
      },
      {
            name: "BBQ Junction",
            rating: getRandomRating(),
            cuisines: ["American", "Barbecue", "Burgers"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jhskcgxnvo5shdlajyfv"
      },
      {
            name: "Mamma Mia",
            rating: getRandomRating(),
            cuisines: ["Italian", "Pasta", "Risotto"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ube3t21gqmn0clnsp2h4"
      },
      {
            name: "Thai Orchid",
            rating: getRandomRating(),
            cuisines: ["Thai", "Pad Thai", "Curry"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xwji4tweqhyifzz3qi5y"
      },
      {
            name: "La Pizzeria",
            rating: getRandomRating(),
            cuisines: ["Italian", "Pizza", "Calzone"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gc6wtm41htv3j9qxinjl"
      },
      {
            name: "Kung Fu Kitchen",
            rating: getRandomRating(),
            cuisines: ["Chinese", "Kung Pao Chicken", "Noodles"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b318c0b4bc2169550145ace1d6e791a2"
      },
      {
            name: "Bollywood Bites",
            rating: getRandomRating(),
            cuisines: ["Indian", "Curry", "Biryani"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
      },
      {
            name: "Mediterranean Delight",
            rating: getRandomRating(),
            cuisines: ["Mediterranean", "Falafel", "Hummus"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qleznoum8dxm56wcj9mq"
      },
      {
            name: "Szechuan Palace",
            rating: getRandomRating(),
            cuisines: ["Chinese", "Szechuan", "Dumplings"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8f2052219ee00d2dd30309c8a11e9439"
      },
      {
            name: "The Burger Joint",
            rating: getRandomRating(),
            cuisines: ["American", "Burgers", "Fries"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/81fdeb1038508f5666c4e8924d25f394"
      },
      {
            name: "Falafel King",
            rating: getRandomRating(),
            cuisines: ["Middle Eastern", "Falafel", "Shawarma"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552"
      },
      {
            name: "Tokyo Ramen House",
            rating: getRandomRating(),
            cuisines: ["Japanese", "Ramen", "Gyoza"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/535fc9f9c135f7982317bbb6a64a1ffc"
      },
      {
            name: "Little Italy",
            rating: getRandomRating(),
            cuisines: ["Italian", "Pizza", "Pasta"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/as0zqeeur2vkfaoc2iq0"
      },
      {
            name: "Noodle World",
            rating: getRandomRating(),
            cuisines: ["Asian", "Noodles", "Stir-fry"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/plt0n4wtwynmttxbdqvm"
      },
      {
            name: "Veggie Paradise",
            rating: getRandomRating(),
            cuisines: ["Vegetarian", "Salads", "Wraps"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5b17fc2fe703cfaa5478f2994fdf2e1d"
      },
      {
            name: "Carnivore's Den",
            rating: getRandomRating(),
            cuisines: ["Steakhouse", "BBQ", "Ribs"],
            deliveryTiming: getRandomDeliveryTiming(),
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/plt0n4wtwynmttxbdqvm"
      }
];

// Function to generate random rating between 3.0 and 5.0
function getRandomRating() {
      return (Math.random() * (5.0 - 3.0) + 3.0).toFixed(1);
}

// Function to generate random delivery timing between 20 and 60 minutes
function getRandomDeliveryTiming() {
      return Math.floor(Math.random() * (60 - 20 + 1) + 20) + " minutes";
};

const Header = () => {
      return (
            <header className="header">
                  <div >
                        <img className="logo" src="https://media.istockphoto.com/id/1342018470/vector/burger-king-vector-logo-design-burger-with-crown-and-mustache-icon-logo-concept.jpg?s=1024x1024&w=is&k=20&c=8yOJRXqVIDC2WlDUioWNk6oliWsg9idgH6uNhsoiK6E=" />
                  </div>
                  <div className="ul-items">
                        <nav className="navbar nav-items">
                              <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Cart</a></li>
                              </ul>
                        </nav>
                  </div>
            </header>
      )
};

const SearchBar = () => {
      return (
            <div className="search">
                  <input type="text" placeholder="Search..." />
                  <FaSearch className="search-icon" />
            </div>
      )
};

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

const Body = () => {
      return (
            <div className="body">
                  <SearchBar />
                  <div className="restaurant-container">
                        {
                              resList.map((resDetails,index)=>{
                                    return <RestaurantCard resData={resDetails} key={index}/>
                              })
                        }
                  </div>
            </div>
      )
};

const Footer = () => {
      return (
            <footer className="footer">
                  <div className="footer-section">
                        <h4>Careers</h4>
                        <ul>
                              <li><a href="#">Job Opportunities</a></li>
                              <li><a href="#">Internships</a></li>
                        </ul>
                  </div>
                  <div className="footer-section">
                        <h4>Location</h4>
                        <p>Sector-8, Malviya Nagar, Jaipur</p>
                  </div>
                  <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>Email: aniljangidAnny.com</p>
                        <p>Phone: +91-8003177721</p>
                  </div>
                  <div className="footer-section">
                        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                  </div>
            </footer>

      )
};

const AppLayout = () => {
      return (
            <div className="app">
                  <Header />
                  <Body />
                  <Footer />
            </div>
      )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); 
root.render(<AppLayout />); 