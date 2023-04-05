import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://img.freepik.com/premium-vector/food-point-logo-design-template_145155-1022.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0",
};

const resObj = {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "5938",
      "name": "Burger King",
      "uuid": "15bfac38-f648-4d1f-8a91-7bbd6f9a4c1e",
      "city": "1",
      "area": "Shivaji Nagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "98086d394755a98f3da232a1e157fec5",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 2.700000047683716,
      "slugs": {
        "restaurant": "burger-king-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Unit no 111/4, and 8/2, Asha Gallary, Opposite to west side , Commercial Street, Bangalore-  5600001",
      "locality": "Tasker Town",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "5938",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 2.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  }

const RestaurantCardComponent = (props) => {
    const { resData } = props;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo"
             src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                resData.data.cloudinaryImageId
             }
             />
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.data.minDeliveryTime} minutes</h4>
            <h4>Rs.{resData.data.costForTwo / 100} For </h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>        
            <div className="res-container">
                <RestaurantCardComponent 
                    resData={resObj} />    
            </div>        
        </div>
    )
}


const AppLayout = () => {
    return (
        <div clasName="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);