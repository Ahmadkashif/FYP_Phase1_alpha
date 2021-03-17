import React, {useState} from "react";
import Binder from './BinderAgent';
import GameForm from './EventsGameForms';

const GameFormContainer = (props)=>{

    let array = [];
    let dataBinderCallbackArray = [];
    let [gamedata,setGamedata] = useState({});
    let [binder,setBinder] = useState(false);
    let counter = props.counter;
    let sentinel = 0;

    const renderGameForms = ()=>{
        while( sentinel < props.counter ){
            sentinel++;
            array.push( <GameForm index = {sentinel} dataBinder = {setGamedata}/> );
            dataBinderCallbackArray.push(gamedata);
        }
        props.dataBinderCallback(dataBinderCallbackArray)
        return array;
    }

    return(
        <div>
            
            { renderGameForms() }
            
        </div>
    )
}

export default GameFormContainer;