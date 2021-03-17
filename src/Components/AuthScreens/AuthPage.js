import React , {useState} from "react"
import SignInForm from './SignInForm'
import Header from '../../Dashboard/Header/Header'

const AuthPage = ()=>{

    return (
        <div>
            <Header/>
            <div classname = "d-flex justify-content-center container w-100">
                <SignInForm/>
            </div>
            
        </div>
    )
}

export default AuthPage;