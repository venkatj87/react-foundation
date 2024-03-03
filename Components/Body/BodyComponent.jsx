import RestroCardComponent from "./RestroCardComponent"
import './index.css';

const BodyComponent = ({data}) => {
    console.log(data);
    return (
        <div className="body-container">
            <div className="search">

            </div>
            {
                data.map((item) => (
                    <RestroCardComponent key={item.info.id} item={item.info}/>
                ))
            }
        </div>
    )
}

export default BodyComponent;