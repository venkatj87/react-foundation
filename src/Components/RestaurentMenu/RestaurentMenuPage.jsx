import React from 'react';
import useFetchMenu from '../../utils/useFetchMenu';
import { useParams } from 'react-router-dom';
import { CDN_IMAGES_URL } from '../../utils/constant';
import './index.css';

function RestaurentMenuPage(props) {
    
    const params = useParams();
    const menuData = useFetchMenu(params?.resId);
    if(menuData === null) return <h1>Loading...</h1>;
    const { name, cuisines } = menuData?.cards[0].card.card?.info;
    const menuItems = menuData?.cards[2].groupedCard?.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

    return (
        <div className='resto-menu-container'>
            <h3>{name}</h3>
            <h5>Restaurent Menu</h5>
            <p>{cuisines.join(", ")}</p>
            <ul>  
                {
                    menuItems?.map(item => (
                        <li key={item.card.info?.id}>
                            <p> {item.card.info.name} - RS. {item.card.info.price/100 || item.card.info.defaultPrice }</p>
                            <img className="menu-item-img" src={CDN_IMAGES_URL+item.card.info?.imageId } />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default RestaurentMenuPage;