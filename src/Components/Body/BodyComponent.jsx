import RestroCardComponent from "./RestroCardComponent"
import useFetchData from "../../utils/useFetchData";
import useGeoLocation from "../../utils/useGeoLocation";
import { useRef } from "react";
import withPromotedRestroCard from "./withPromotedRestroCard";

const BodyComponent = ({data}) => {
    const searchRef = useRef();
    console.log(data);
    const location = useGeoLocation();
    const {filterdData, setFilteredData} = useFetchData(data);
    const PromotedRestroCard = withPromotedRestroCard(RestroCardComponent);
    
    const handleOnClick = (data) => {
        const newData = filterdData.filter((item) => item.info.avgRating > 4 === true);
        setFilteredData(newData);
    }
    const handleSearch = () => {
        // const restoName = item.info.name.toLowerCase();
        const searchedData = filterdData.filter((item) => item.info.name.toLowerCase().indexOf(searchRef.current.value.toLowerCase()) > -1);
        setFilteredData(searchedData);
        console.log(searchRef.current.value);
    }


   
    return (
        <div>
            <div className="flex-wrap m-4">
                <input ref={searchRef} type="text" className="border-2 border-rose-500"/>
                <button onClick={() => handleSearch()} className="rounded-md bg-orange-400 mx-2 px-3 py-2">Search</button>
                <button className="rounded-md bg-orange-200 mx-2 px-3 py-2" onClick={() => handleOnClick(filterdData.length > 0?filterdData:data)}> Top Rated Restaurents </button>
            </div>
            <div className="flex flex-wrap m-4">
            {
                filterdData.map((item, index) => (
                    item.info.sla.deliveryTime < 30 ?
                        <PromotedRestroCard label={"Delivery within 30min"} key={item.info.id+'-'+index} item={item.info}/>
                        :
                        <RestroCardComponent key={item.info.id+'-'+index} item={item.info}/>               
                ))
            }
            </div>
        </div>
    )
}

export default BodyComponent;