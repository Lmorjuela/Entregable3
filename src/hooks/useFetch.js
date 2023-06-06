import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    //Guardar la información de la API
    const [state, setState] = useState()
    //Estado que nos permite conocer cuando hay un error o cuando no
    const [hasError, setHasError] = useState(false)

    //Hago la petición de la API
    const getApi = () => {
        axios.get(url)
            .then(res =>{
            setState(res.data)
            setHasError(false)
            }) //Cuando la petición es exitosa
            .catch(err => {
                console.log(err)
                setHasError(true)
            }) //Cuando la petición presenta un error 
    }
return [state, getApi, hasError]
}

export default useFetch