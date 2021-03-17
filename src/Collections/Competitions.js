import React , {Component} from 'react';
import axios from 'axios';
import TableHeader from '../Components/CollectionViewTable/CollectionsViewTableHeader'
import TableRow from '../Components/CollectionViewTable/CollectionsViewTableRow'
import { MDBCollapse,MDBCard,MDBCardBody } from "mdbreact";
import EditCompetitionsForm from '../Forms/Competitions/EditCompetitionsForm'
import AddCompetitionForm from '../Forms/Competitions/AddCompetitions'

class CompetitionsCollection extends Component{

    state = {
        dbCollection : [],
        selection:0,
        viewState:"",
        queryObjforSelected:{},
        editpane : []
    }

    componentDidMount = async ()=>{

        await axios.get('http://15.207.96.172:5000/portal/Competitions/getCompetitions')
            .then(res => {
                // console.log(res.data);
                this.setState({
                    dbCollection : res.data.body,
                    editpane: this.state.dbCollection
                });
                // console.log(this.state.dbCollection);
            })
            .catch(function (error) {
                // console.log(error);
            })
    }

    deletePlayer = async (id)=>{

        await axios.post('http://15.207.96.172:5000/portal/competitions/deleteCompetition/127.0.0.1/27017/poolSize=20&w=majority',
        {
            "rawJson":{
                "competitionId": id
            }
        })
        .then(res => {
            // console.log(res.data);
        })
        .catch(function (error) {
            // console.log(error);
        })
    }

    editorMethod (index ) {
        let editor = [];
        editor[index] = this.state.editpane[index] === true ? false : true ;
        this.setState(
        {
            editpane : editor
        }
    )
    // console.log(this.state.editpane)};

    renderPlayers(){
        console.log("called")
        const queryRefer = {
            "dbName":"test",
            "collectionName":"playersCollectionAppLevel"
        }
        if(this.state.dbCollection.length){
        return  this.state.dbCollection.map( (player,index) => (
        <div>
            <TableRow name = {player.name} 
            duration = { player.ExpiryTime}
            description = {player.description} current = {player.current} id_cust = {player.competitionId}  query = {player._id} 
            deletePlayerHandler = {this.deletePlayer} 
            index = {index}
            editPlayerHandler = {  this.editorMethod.bind(this) }
            />

            <MDBCollapse id='collapse1' isOpen={this.state.editpane[index]} className = "mb-2">
                        <MDBCard>
                            <MDBCardBody>
                                   <EditCompetitionsForm name = {player.name} 
                                    duration = { player.ExpiryTime}
                                    description = {player.description} current = {player.current} id_cust = {player.id} query = {player._id}
                                    />
                            </MDBCardBody>
                        </MDBCard>
            </MDBCollapse>


        </div>)
        )
        }
        else
        return (<div></div>)
    }

    // rendernothing(){

    // }

    render(){
        return (
            <div>

                {this.state.selection?
                this.viewSelectedPlayer():(
                <ul className="responsive-table mt-5 m-4">
                    <TableHeader t1 = {"Name"} t2 = {"Description"} t3 = {"Current"} t4 = {"id"} addTitle = {"Add Competitions"}
                     nextRender = {  <AddCompetitionForm /> }/>
                {this.renderPlayers()}
                </ul>)}
            </div>
        )
    }
}
export default CompetitionsCollection