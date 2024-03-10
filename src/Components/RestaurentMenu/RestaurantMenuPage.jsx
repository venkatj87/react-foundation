import React, { useState } from 'react';
import useFetchMenu from '../../utils/useFetchMenu';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';

function RestaurantMenuPage(props) {
    
    const params = useParams();

    const menuData = useFetchMenu(params?.resId);
    if(menuData === null) return <h1>Loading...</h1>;
    const { name, cuisines } = menuData?.cards[0].card.card?.info;
    const itemCategories = menuData?.cards[2].groupedCard?.cardGroupMap.REGULAR.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("TIems sdfds",  itemCategories)

    return (
        <div className="w-[600px] mx-auto">
            <div className='text-center'>
                <h1 className='font-bold text-lg'>{name}</h1>
                <p className='italic text-sm'>{cuisines.join(", ")}</p>
            </div>
            
            {itemCategories.map(citem => (
                <>
                    <RestaurantCategory key={citem?.card?.card?.title} data={citem}/>
                </>
            ))}
        </div>
    );
}

export default RestaurantMenuPage;