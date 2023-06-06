import './styles/locationInfo.css'

const LocationInfo = ({ location }) => {

    return (
        <div className="location_info">
            <h2 className="location_name">{location?.name}</h2>
            <ul className="location_list">
                <li className="location_item">
                    <span className="location_label">Type</span>
                    <span className="location_value">{location?.type}</span>
                </li>
                <li className="location_item">
                    <span className="location_label">Dimension</span>
                    <span className="location_value">{location?.dimension}</span>
                </li>
                <li className="location_item">
                    <span className="location_label">Population</span>
                    <span className="location_value">{location?.residents.length}</span>
                </li>
            </ul>
        </div>
    )
}

export default LocationInfo