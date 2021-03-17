import React , {useState} from "react"
import '../ComponentsStatic.css'
import {Spinner} from "react-bootstrap"
import Loader from "react-loader-spinner"

const ScreenSpinner = ()=>{
    const loading = useState(true);
    return (
    <div className = "ScreenspinnerDiv d-flex flex-column justify-content-center h-100 w-100">
        <Loader type = "RevolvingDot" color= "#4169E1" height = {100} width = {100}/> 
    </div>)
}

export default ScreenSpinner