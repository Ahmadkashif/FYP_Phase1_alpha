import React , {Component} from 'react';
import { MDBCollapse,MDBCard,MDBCardBody } from "mdbreact";
import {  MDBInput, MDBBtn} from 'mdbreact';
import DateTimePicker from 'react-datetime';
import axios from "axios"
import TableHeader from '../Components/CollectionViewTable/CollectionsViewTableHeader'
import TableRow from '../Components/CollectionViewTable/CollectionsViewTableRow'
import EventsForm from '../Forms/Events/EventsForm'
import EventsGameForm from '../Forms/Events/EventsGameForms'
import EditEventForm from '../Forms/Events/EditEventForm'

class EventsCollection extends Component{

    state = {
        dbCollection : [],
        selection : 0,
        viewState : "",
        queryObjforSelected : {},
        editpane : []
    }

    
    componentDidMount = async ()=>{

        await axios.get('http://15.207.96.172:5000/portal/events/getEvents')
            .then(res => {
                // console.log(res.data);
                this.setState({
                    dbCollection : res.data.body,
                    editpane: this.state.dbCollection 
                });
                // console.log(this.state.dbCollection);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // editPlayer = async (id)=>{
    //     console.log(id)
    //     await axios.post('http://15.207.96.172:5000/portal/events/updateEventPortal/127.0.0.1/27017/poolSize=20&w=majority',
    //     {
    //         "query":{
    //             id : id
    //         },
    //         "newUpdate":{
    //             "current": false,
    //             "id": 16,
    //             "name": "Dummy Event",
    //             "description": "EventDesc",
    //             "ExpiryTime":922337203,
    //             "games": [{
    //                 "id": 1,
    //                 "name": "RELAX",
    //                 "entryFee": 5000,
    //                 "entryFeeType": "coins",
    //                 "prize": 10000
    //             }]
    //         } 
    //     })
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }

    deletePlayer = async (id)=>{

        await axios.post('http://15.207.96.172:5000/portal/events/deleteEventPortal/127.0.0.1/27017/poolSize=20&w=majority',
        {
            "rawJson":{
                "id": id
            }
        })
        .then(res => {
            // console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    openPlayer(){

    }
 
    editorMethod (index) {
        let editor = [];
        editor[index] = this.state.editpane[index] === true ? false : true ;

        this.setState(
        {
            editpane : editor
        }
    )
    
};

    renderPlayers(){
        console.log("called")
        const queryRefer = {
        //    "_id":
        }
        
        if(this.state.dbCollection.length)
        {
            this.state.editpane.map( e => e = false )
        return  this.state.dbCollection.map( (player, index) => 
            (
            <div>
                <TableRow name = {player.name} 
                    duration = { player.ExpiryTime}
                    description = {player.description} current = {player.current} id_cust = {player.id} query = {
                        player._id
                    } 
                    index = {index} editPlayerHandler = { this.editorMethod.bind(this) } deletePlayerHandler = {this.deletePlayer} />

                <MDBCollapse id='collapse1' isOpen={this.state.editpane[index]} className = "mb-2">
                        <MDBCard>
                            <MDBCardBody>
                                   <EditEventForm name = {player.name} 
                                    duration = { player.ExpiryTime}
                                    description = {player.description} current = {player.current} id_cust = {player.id} query = {player._id}
                                    />
                            </MDBCardBody>
                        </MDBCard>
                </MDBCollapse>
            </div>
            )
        )
        }
        else
        return (<div></div>)
    }

    render(){
        return (
            <div>

                {this.state.selection?
                this.viewSelectedPlayer():(
                <ul className="responsive-table mt-5 m-4">
                    <TableHeader className = "nav fixed-top "t1 = {"Name"} t2 = {"Description"} t3 = {"Current"} t4 = {"id"} addTitle = {"Add Event"} 
                    nextRender = {  <EventsForm GameForm = {EventsGameForm}/> }/>
                {this.renderPlayers()}
                </ul>)}
            </div>
        )
    }
}
export default EventsCollection