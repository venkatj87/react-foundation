// @flow 
import * as React from 'react';
import { CDN_IMAGES_URL } from '../../utils/constant';

const ItemList = ({items}) => {
    console.log(items)
    return (
        <>
        {
            items.map(item => (
                <div key={item.card.info.id} className="flex justify-center p-4 my-1 bg-gray-100 justify-between divide-y-2">
                    <div>
                        <h3> {item.card.info.name} - ₹.{item.card.info.price/100 || item.card.info.defaultPrice }</h3>
                        <p className={`text-xs ${item.card.info.itemAttribute.vegClassifier === 'VEG'?'text-green-600':'text-red-800'}`}> {item.card.info.itemAttribute.vegClassifier}  
                        <span className='text-black font-bold'>  {item.card.info.ratings.aggregatedRating.rating}  </span></p>
                        <p className={`text-xs`}> {item.card.info.description} </p>
                    </div>
                    <div>
                        <button className='absolute rounded-md text-white bg-gray-900 px-2 py-1'> + Add</button>
                        <img className="w-[150px]" src={CDN_IMAGES_URL+item.card.info?.imageId } alt="Image not found." />
                    </div>
                </div>
            ))
        }
       </>
    );
};

export default ItemList