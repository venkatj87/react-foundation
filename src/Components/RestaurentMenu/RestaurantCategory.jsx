import React, {useState} from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({data}) => {
    const [open, setOpen] = useState();
    return (           
        <div>
            <div className="flex justify-center justify-between shadow-lg my-1 p-2 font-bold bg-gray-300">
                <p>{data?.card?.card?.title} {`(${data?.card?.card?.itemCards.length})`}</p>
                <button onClick={() => setOpen(open => !open)}>{open?"🔼":"🔽"}</button>
            </div>
            {
                open && <ItemList key={data?.card?.card?.title} items={data?.card?.card?.itemCards}/> 
            }
        </div>
    );
};

export default RestaurantCategory