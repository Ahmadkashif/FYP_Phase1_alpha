import React, {useState} from "react";
import {  MDBInput, MDBBtn} from 'mdbreact';
import '../../Components/Components.css'
import '../../Forms/Forms.css'
import DateTimePicker from 'react-datetime';
import axios from "axios"
import TbHeader from '../../Components/CollectionViewTable/CollectionsViewTableHeader'

const EditCompetitionsForm  = (props)=>{
    let [compCurrent, setCompCurrent] = useState(props.current);
    let [compName, setCompName] = useState(props.name);
    let [compDesc,setCompDesc] = useState(props.description);
    let eventGames = [];
  
  
    let [schema,setSchema] = useState({
      "current": "",
      "id": 0,
      "name": "",
      "description": "",
      "ExpiryTime": 9223372036854775807
    })

    

  
    const [valueTimePicker, onChangeTimePicker] = useState(new Date());

    return (
        <div>
              <MDBInput
        label="Competition name"
        value = {compName}
        onChange = {(e)=>{
            setCompName(e.target.value);
        }}
        group
        type="text"
        validate
        error="wrong"
        success="right"
        />
      <MDBInput
        label="Competition Description"
        value = {compDesc}
        onChange = {(e)=>{
            setCompDesc(e.target.value);
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
        <select className="browser-default custom-select  md-form form-group" value = {compCurrent} onChange = {(e)=>setCompCurrent(e.target.value)}>
          <option>Confirm Current</option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
    </div>

                                    <div className = "d-flex justify-content-center">
                                    <MDBBtn  color="cyan" onClick = {
                                        
                                        async ()=>{
                                
                                            await setSchema({"current": compCurrent,"id": 0,"name": compName,"description": compDesc,"ExpiryTime": 9223372036854775807 });
                                        await axios.post('http://15.207.96.172:5000/portal/competitions/updateCompetition/127.0.0.1/27017/poolSize=20&w=majority',{
                                            "query":{
                                                "competitionId": props.query
                                            },
                                
                                            "newUpdate":{
                                                "current": compCurrent,
                                                "id": 0,
                                                "name": compName,
                                                "description": compDesc,
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

export default EditCompetitionsForm;