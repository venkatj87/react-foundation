import React, {useEffect, useState} from "react";
import { RESTAURENT_MENU_URL } from './constant';

const useFetchMenu = (restoId) => {
    const [restoMenu, setRestoMenu] = useState(null);


    const fetchMenu = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.1031865&lng=78.83401730000001&restaurantId=${restoId}&catalog_qa=undefined&submitAction=ENTER`);
        const responseJson = await response.json();
        setRestoMenu(responseJson.data);
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    return restoMenu;
}

export default useFetchMenu;