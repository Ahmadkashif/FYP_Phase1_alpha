import React , {Component} from 'react';
import axios from 'axios';
import './Table.css'

export default class TableRow extends Component{
    
    // style = {
    //     background-color:
    // }

    styleG = {backgroundColor: '#e4ffe9' }
    styleR = { backgroundColor:'#ffe6e4'}


    render(){
        return (
            <div>
                <li className="table-row p-2" style = {this.props.current? {backgroundColor: '#e4ffe9' }:{ backgroundColor:'#ffe6e4'} }>
                    <div className="col col-2  p-1" data-label="_id">{this.props.name}</div>
                    <div className="col col-2  p-1" data-label="Customer Name">{this.props.description}</div>
                    <div className="col col-2  p-1" data-label="Amounts">{this.props.current.toString()}</div>
                    <div className="col col-1  p-1" data-label="Amount">{this.props.id_cust}</div>
                    <div className="col col-4 h-100 d-flex justify-content-center BtnDiv" >
                        <button onClick = {()=> this.props.editPlayerHandler(this.props.index)} className="btn btn-primary btn-sm btnCustom ml-auto mr-1 updateBtn">Edit </button>
                        <button onClick = {()=> this.props.deletePlayerHandler(this.props.query)} className="btn btn-primary btn-sm btnCustom deleteBtn">Delete</button>
                    </div>
                </li>

                <div>
                    
                </div>
            </div>
        )
    }
}