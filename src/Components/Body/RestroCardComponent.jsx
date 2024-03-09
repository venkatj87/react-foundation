import React from "react";
import { Link } from "react-router-dom";
import { CDN_IMAGES_URL } from "../../utils/constant";

const RestroCardComponent = ({item}) => {
    
    const {id, name, cuisines, sla, avgRating, areaName, costForTwo} = item;
    return (
        <Link to={"restaurents/"+id}>
            <div className="resto-card-container">
                <div className="resto-img-container">
                    <img alt="Restaurent Image" className="restrua-image" src={CDN_IMAGES_URL+item.cloudinaryImageId} />
                </div>
                <div className="resto-meta">
                    <h4 className="reto-name">{item.name}</h4>
                    <p>{cuisines.join(", ")}</p>
                    <p>{sla.deliveryTime} mins</p>
                    <p>{avgRating}</p>
                    <p>{areaName}</p>
                    <h6>{costForTwo}</h6>
                </div>
            </div>
        </Link>
    );
}

export default RestroCardComponent