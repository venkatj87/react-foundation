import RestroCardComponent from "./RestroCardComponent"
import './index.css';
import useFetchData from "../../utils/useFetchData";
import useOnlineStatus from "../../utils/useOnlineStatus";

const BodyComponent = ({data}) => {
    const {filterdData, setFilteredData} = useFetchData([]);
    const onlineStatus = useOnlineStatus();
    
    const handleOnClick = (data) => {
        const newData = data.filter((item) => item.info.avgRating > 4 === true);
        setFilteredData(newData);
    }
   
    return (
        <div className="body-container">
            <div className="filter-btn-container">
                <button onClick={() => handleOnClick(filterdData.length > 0?filterdData:data)}> Top Rated Restaurents </button>
                <button > {onlineStatus?<span >Online</span>:<span>Offline</span>} </button>
            </div>
            <div className="resto-container">
            {
                filterdData.map((item, index) => (
                    <RestroCardComponent key={item.info.id+'-'+index} item={item.info}/>
                ))
            }
            </div>
            
        </div>
    )
}

export default BodyComponent;