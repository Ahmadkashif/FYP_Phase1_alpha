import React, {useState} from "react";
import {  MDBInput, MDBBtn} from 'mdbreact';
import { MDBCollapse } from "mdbreact";
import GameFormContainer from './GameFormContainer'
import '../../Components/Components.css'
import '../../Forms/Forms.css'
import DateTimePicker from 'react-datetime';
import axios from "axios"
import TbHeader from '../../Components/CollectionViewTable/CollectionsViewTableHeader'

const EditEventForm  = (props)=>{

    let [addedGames, setAddedGames] = useState(0);
    let [gameContainerLoaded,setGameContainerLoaded] = useState(false);
    let [eventCurrent, setEventCurrent] = useState(props.current);
    let [eventName, setEventName] = useState(props.name);
    let [eventDesc,setEventDesc] = useState(props.description);
    let eventGames = [];
  
    const setEventGames = (array)=>{
      eventGames = array
    }
    let ArrayBinderSudo ;
  
    let [schema,setSchema] = useState({
      "current": "",
      "id": 0,
      "name": "",
      "description": "",
      "ExpiryTime": 9223372036854775807,
      "games": []
    })
  
  
    const [valueTimePicker, onChangeTimePicker] = useState(new Date());

    return (
        <div>
             <MDBInput
                                        label="Event name"
                                        value = {eventName}
                                        onChange = {(e)=>{
                                            setEventName(e.target.value);
                                        }}
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        />
                                    <MDBInput
                                        label="Event Description"
                                        value = {eventDesc}
                                        onChange = {(e)=>{
                                        setEventDesc(e.target.value);
                                        }}
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />

                                     <div className = "row pl-3 mb-1 md-form form-group w-100">
                                    
                                        <div className = "col container d-flex justify-content-center DateTimePickerDiv ">
                                        <DateTimePicker className = "w-80"
                                                onChange={
                                                (e)=>{
                                                onChangeTimePicker(e._d.getTime())
                                                }}
                                                width = "auto"
                                                initialValue = { Date.now()}
                                                value={valueTimePicker}
                                            />
                                            <MDBBtn type = "button" className = "setTimeBtn" >Set Time</MDBBtn>
                                        </div>

                                        <div  className = "col d-flex justify-content-center md-form form-group">
                                            <p className = "pt-5 mt-1 pr-4  ">Time in milliseconds :   </p>
                                            <MDBInput type="number"  className = "pt-3 mt-1" value = {valueTimePicker.getTime()} filled = {true}/>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <select className="browser-default custom-select  md-form form-group" value = {eventCurrent}
                                         onChange = {(e)=>setEventCurrent(e.target.value)}
                                         >
                                        <option>Confirm Current</option>
                                        <option value={true}>True</option>
                                        <option value={false}>False</option>
                                        </select>
                                    </div>

                                    <div className = "d-flex justify-content-center">
                                    <MDBBtn  color="cyan" onClick = {
                                        
                                        async ()=>{
                                
                                        await setSchema({"current": eventCurrent,"id": 0,"name": eventName,"description": eventDesc,"ExpiryTime": 9223372036854775807,"games": eventGames });
                                        await axios.post('http://15.207.96.172:5000/portal/events/updateEventPortal/127.0.0.1/27017/poolSize=20&w=majority',{
                                            "query":{
                                                "id": props.query
                                            },
                                
                                            "newUpdate":{
                                            "current": eventCurrent,
                                            "id": 0,
                                            "name": eventName,
                                            "description": eventDesc,
                                            "ExpiryTime": valueTimePicker
                                            }
                                            }
                                        ).then(res => {
                                            console.log(res.data);
                                            TbHeader.toggleCollapser();
                                        })
                                        .catch(function (error) {
                                            console.log(error);
                                        })
                                    }
                                    } >
                                        Update
                                </MDBBtn>
                                </div>

        </div>
    )

}

export default EditEventForm;