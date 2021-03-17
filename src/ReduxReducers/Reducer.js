import React from 'react';
import PropTypes from 'prop-types';

const initState = {
    auth: false
};

const reducer = (state = initState, action)=>{

    if(action.type === "SIGN_IN")
    {
        console.log('kkkkkkkkkkkkkkkkkkkkkk');
        return{
            auth: true
        }
    }
    else if(action.type === "SIGN_OUT"){
        return{
            auth: false
        }
    }
    return state;
}

export default reducer;