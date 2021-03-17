import React, { Component } from 'react';
import {Route, Router,Switch} from 'react-router-dom'
import EventsCollection from '../../Collections/Events'
import CompetitionsCollection from '../../Collections/Competitions'
class MainRouter extends Component{

    render(){
        return(
        <div>
            <Switch>
        
                <Route exact path = "/getEvents" component = {EventsCollection}/>
                    
                <Route exact path = "/getCompetitions" component = {CompetitionsCollection}/>
                
            </Switch>
        </div>
        )
    }
};

export default MainRouter;