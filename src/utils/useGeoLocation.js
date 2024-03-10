import React, {useEffect, useState} from 'react';

const useGeoLocation = (props) => {

    const [geolocation, setGeoLocation] = useState(null);

    const getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                setGeoLocation({ longitude: position.coords.longitude, latitude: position.coords.latitude})
            });
        }
    }

    useEffect(() => {
        getLocation();
    }, [])
    
    return geolocation
};

export default useGeoLocation