import { useState } from "react";
import RestroCardComponent from "./RestroCardComponent"
import './index.css';

const BodyComponent = ({data}) => {
    const [filterdData, setFilteredData] = useState(data); 
    console.log("useState:", useState([]));

    const handleOnClick = () => {
        const newData = data.filter((item) => item.info.avgRating >= 4 === true);
        setFilteredData(() => newData);
    }

    return (
        <div className="body-container">
            <div className="filter-btn-container">
                <button onClick={() => handleOnClick()}> Top Rated Restaurents </button>
            </div>
            <div className="resto-container">
            {
                filterdData.length > 0 &&
                filterdData.map((item) => (
                    <RestroCardComponent key={item.info.id} item={item.info}/>
                ))
            }
            </div>
            
        </div>
    )
}

export default BodyComponent;