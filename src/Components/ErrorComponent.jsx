import * as React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorComponent = (props) => {

    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h3> Opps! {err.status}</h3>
            <h4> Something went wrong. {err.statusText} </h4>
            
        </div>
    );
};

export default ErrorComponent