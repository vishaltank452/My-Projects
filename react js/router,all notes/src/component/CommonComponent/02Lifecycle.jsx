import React, { Component } from 'react';

import LifecycleRender from './02.2LifecycleRender';

class Lifecycle extends Component {
    constructor(){
        super();
        this.state={
            data:"world"
        }
        
        console.log("construction is called")
       
    }
    render() {
        
        return (
            <>
               <h1 style={{color:"red"}}>hellow {this.state.data}</h1>
               <LifecycleRender/>
            </>
        );
    }
}

export default Lifecycle;