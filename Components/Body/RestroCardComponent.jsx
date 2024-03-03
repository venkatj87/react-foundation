const RestroCardComponent = ({item}) => {
    const baseImageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const {name, cuisines, sla, avgRating, areaName, costForTwo} = item;
    return (
        <div className="resto-card-container">
            <div className="resto-img-container">
                <img alt="Restaurent Image" className="restrua-image" src={baseImageUrl+item.cloudinaryImageId} />
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
    );
}

export default RestroCardComponent