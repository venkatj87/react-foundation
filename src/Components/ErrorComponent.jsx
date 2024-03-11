import { useRouteError } from 'react-router-dom';

const ErrorComponent = (props) => {

    const err = useRouteError();
    return (
        <div>
            <h3> Opps! {err.status}</h3>
            <h4> Something went wrong. {err.statusText} </h4>
            <p>{err.data}</p>
        </div>
    );
};

export default ErrorComponent;