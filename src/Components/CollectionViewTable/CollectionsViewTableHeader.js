import React , {Component} from 'react';
import axios from 'axios';
import './Table.css'
import {MDBBtn,MDBCollapse} from 'mdbreact';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';

export default class TableHeader extends Component{

    state = {
        collapseID: false
    }

    renderForm = ()=>{
    }

    submitForm = ()=>{
    }

    
    toggleCollapser = ()=>{
        const newID = !this.state.collapseID;
        this.setState({
            collapseID: newID
        })
    }

    render(){
        return (
            <div className = "stickyHeader">
                <li className="table-header">
                    <div className="col col-2 p-1">{this.props.t1}</div>
                    <div className="col col-2 p-1">{this.props.t2}</div>
                    <div className="col col-2 p-1">{this.props.t3}</div>
                    <div className="col col-1 p-1">{this.props.t4}</div>
                    <div className="col col-3 d-flex justify-content-end">
                        <MDBBtn color="blue-grey" onClick = {this.toggleCollapser}>{this.props.addTitle}</MDBBtn>
                    </div>
                </li>
                <MDBCollapse id='collapse1' isOpen={this.state.collapseID}>
                <MDBCard>
                    <MDBCardBody>
                     {this.props.nextRender}
                    </MDBCardBody>
                </MDBCard>
                </MDBCollapse>
            </div>
        )
    }
}