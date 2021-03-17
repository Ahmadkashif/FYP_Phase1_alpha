import React , { useState  , Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import axios from "axios"
import {connect} from 'react-redux'

class SignInForm extends Component {

  // const {username, setUserName} = useState();
  // const {password, setPassword} = useState();

  // const onInputChangeuserName = (e)=>{
  //   setUserName(e.target.value);
  // }
  // const onInputChangedPassword = (e) =>{
  //   setPassword(e.target.value);
  // }
  state = {
    username : "",
    password : ""
  }

 onSubmitForm = async ()=>{

    await axios.post('http://15.207.96.172:5000/portal/admin/signInUser',
    {
          username : this.state.username,
          password : this.state.password
    }

  ).then(res => {
      console.log(res.data);
      if(res.data.statusCode === 200)
      this.props.onSignInEvent();
  })
  .catch(function (error) {
      console.log(error);
  })
  }

  render(){
    return (
      <div className = "container">
        <MDBContainer>
          <MDBRow className = "container mt-5">
            <MDBCol md="6" className = "ml-auto mr-auto">
              <div >
                <p className="h5 text-center mb-4">Sign In</p>
                <div className="grey-text">
                  <MDBInput label="Type your username" icon="envelope" group value = {this.state.username} type="text" validate error="wrong"
                    success="right" onChange = { (e)=>{this.setState({username: e.target.value})} }/>
  
                  <MDBInput label="Type your password" icon="lock" group value = {this.state.password} type="password" validate onChange = { (e)=>{this.setState({password: e.target.value})} } />
                </div>
                <div className="text-center">
                <MDBBtn color="deep-purple"  onClick = {this.onSubmitForm}>Login</MDBBtn>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer> 
      </div>
    )
  }
    ;
};

const mapStateToProps = state =>{

  return {
      reduxProp_Auth: state.auth
  }
}

const AuthActions = dispatch =>{

  return {
      onSignInEvent : ()=> dispatch({type: 'SIGN_IN'}),
  }
}
export default connect(mapStateToProps,AuthActions)(SignInForm);