const withPromotedRestroCard = (RestroCardComponent) => {
    return (props) => {
        return (
            <div>
                <label className="absolute m-2 p-2 bg-black text-white">{props.label}</label>
                <RestroCardComponent {...props} />
            </div>
        )
    }
}

export default withPromotedRestroCard;