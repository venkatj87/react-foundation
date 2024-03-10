import { useState, useEffect } from "react";
import { RESTAURENT_DATA_URL } from "./constant";

const useFetchData = (data) => {
    const [filterdData, setFilteredData] = useState(data);
    
    const fetchData = async () => {
        const dataa = await fetch(RESTAURENT_DATA_URL)
        const jsonData = await dataa?.json();
        const restaurents = jsonData.data.cards
        .filter(item => 'gridElements' in item.card.card && 'restaurants' in item.card.card.gridElements.infoWithStyle)
        .flatMap(item => item.card.card.gridElements.infoWithStyle.restaurants);
        if(restaurents.length > 0) {
            setFilteredData(restaurents);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        filterdData,
        setFilteredData,
    }
}

export default useFetchData;