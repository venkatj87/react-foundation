import React from "react";
import { Link } from "react-router-dom";
import { CDN_IMAGES_URL } from "../../utils/constant";

const RestroCardComponent = ({item}) => {
    
    const {id, name, cuisines, sla, avgRating, areaName, costForTwo} = item;
    return (
        <Link to={"restaurents/"+id}>
            <div className="p-4 m-4 w-[250px] bg-gray-100 hover:bg-gray-300 rounded-md">
                <img alt="Restaurent Image" className="object-fill rounded-md" src={CDN_IMAGES_URL+item.cloudinaryImageId} />
                <div className="">
                    <h4 className="font-bold">{name}</h4>
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