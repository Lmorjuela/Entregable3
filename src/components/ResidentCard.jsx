import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import './styles/residentCard.css'

const ResidentCard = ({ url }) => {

    const [resident, getApiResident] = useFetch(url)

    useEffect(() => {
        getApiResident()
    }, [])

    console.log(resident);


    return (
        <article className="resident">
            <header className="resident_header">
                <img className="resident_img" src={resident?.image} alt="" />
                <div className="resident_status">
                    <span className={`resident_circle ${resident?.status}`}></span>
                    <span className="resident_status-value">{resident?.status}</span>
                </div>
            </header>
            <section className="resident_body">
                <h3 className="resident_name">{resident?.name}</h3>
                <hr className="resident_hr" />
                <ul className="resident_list">
                    <li className="resident_item">
                        <span className="resident_item-name">Specie</span>
                        <span className="resident_item-value">{resident?.species}</span>
                    </li>
                    <li className="resident_item">
                        <span className="resident_item-name">Origin</span>
                        <span className="resident_item-value">{resident?.origin.name}</span>
                    </li>
                    <li className="resident_item">
                        <span className="resident_item-name">Episodes where appear</span>
                        <span className="resident_item-value">{resident?.episode.length}</span>
                    </li>
                </ul>
            </section>
        </article>

    )
}

export default ResidentCard