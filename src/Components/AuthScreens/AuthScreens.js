import React , {useState} from "react"
import SignInForm from './SignInForm'
import ScreenSpinner from '../../ComponentsStatic/Spinners/ScreenSpinner'
import AuthPage from './AuthPage'
import MainPage from '../MainPage/MainPage'
import {connect} from 'react-redux'

const AuthScreen = (props)=>{

    const [loaded, setLoaded] = useState(false);
    const showSpinner = ()=>{
        
        setTimeout(()=>{
           setLoaded(true);
        },500)

        return <ScreenSpinner/>
    }
    const Login = ()=>{

        if(props.reduxProp_Auth && loaded){
            return <MainPage/>
        }
        else if(props.reduxProp_Auth && (!loaded)){
           return showSpinner()
        }
    }
   // use props.reduxProp_auth
    return(

        <div>
            {props.reduxProp_Auth ?  Login() : <AuthPage/> }
        </div>
    )
}

const mapStateToProps = state =>{

    return {
        reduxProp_Auth: state.auth
    }
}

const AuthActions = dispatch =>{

    return {
        onSignInEvent : ()=> dispatch({type: 'SIGN_IN'}),
        onSignOutEvent : ()=> dispatch({type: 'SIGN_OUT'})

    }
}


export default connect(mapStateToProps,AuthActions)(AuthScreen);