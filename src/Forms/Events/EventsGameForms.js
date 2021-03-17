import React, {useState} from "react";
import {  MDBInput, MDBBtn} from 'mdbreact';
import { MDBCollapse } from "mdbreact";

const EventGames = (props)=>{

    let [name,setName] = useState("")
    let [fee,setFee] = useState(0)
    let [feetype,setFeetype] = useState("")
    let [prize,setPrize] = useState(0)

    let [serializer,setSerializer] = useState({
            "id": 0,
            "name": name,
            "entryFee": fee,
            "entryFeeType": feetype,
            "prize": prize
    });

    props.dataBinder(serializer);

    
    return(
        <div>

            <h5 className = "text-center">Add details for Game {props.index} :</h5>
            <MDBInput type="text" label = "Name" value = {name}  onChange = {(e)=>setName(e.target.value)}/>
            <MDBInput type="number" label = "Entry Fee" value = {fee} onChange = {(e)=>setFee(e.target.value)}/>
            <MDBInput type="text" label = "Entry Fee Type" value = {feetype} onChange = {(e)=>setFeetype(e.target.value)}/>
            <MDBInput type="number" label = "Price" value = {prize} onChange = {(e)=>setPrize(e.target.value)}/>
            { serializer ? props.dataBinder(serializer) : setSerializer({"id": 0,"name": name,"entryFee": fee,"entryFeeType": feetype,"prize": prize})}
        </div>
    )
}

export default EventGames