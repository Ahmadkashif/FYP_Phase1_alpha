import React , {Component} from 'react';
import axios from 'axios';
import './Components.css'

class DisplayCards extends Component{
    
    render(){
        return (
            <div>
                <div className="card text-center m-2 cardCollectionCardBody" >
                    <div className="card-body  d-flex justify-content-center">
                        <div className="cardLeft d-flex flex-column justify-content-start">
                            <h4 className="card-title"><strong>Name:</strong>  {this.props.fname} {this.props.lname}</h4>
                            {this.props.rank ? 
                            <h5>{this.props.rank}</h5>:<p></p>}
                            <p className="card-text"><strong>id:</strong>{this.props.id_cust}</p>
                            <p className="card-text"><strong>Email:</strong>  {this.props.email}</p>
                        </div>
                        <div className=" ml-auto  d-flex flex-column justify-content-center cardLeft">
                            <div>
                            <button onClick = {this.props.onClickTree} className="btn btn-primary m-1">Edit Json Tree</button>
                            <button onClick = {this.props.onClickText} className="btn btn-primary m-1">Edit Json text</button>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
        
    
}
export default DisplayCards