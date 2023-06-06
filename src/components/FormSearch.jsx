import { useRef } from "react"
import getRandomNumber from "../utils/getRandomNumber"
import './styles/formSearch.css'

export const FormSearch = ({setIdLocation}) => {
   
    const idLocationValue = useRef()
   
    const handleSubmit = e => {
        e.preventDefault()
        const inputValue =idLocationValue.current.value.trim()
        if(inputValue === ''){
            setIdLocation(getRandomNumber(126))
        }else {
            setIdLocation(inputValue)
        }
    }
   
    return (
        <form onSubmit={handleSubmit} className="form_search">
            <input
                className="input_search"
                placeholder="Enter id location"
                type="text"
                ref={idLocationValue}
            />
            <button className="search_btn">Search</button>
        </form>
    )
}
