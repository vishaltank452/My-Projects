import React, { Component } from 'react';

class LifecycleRender extends Component {
  
    render() {
        console.log("render method called")
        return (
            <>
              <h1>render component</h1>  
                       
            </>
        );
    }
}

export default LifecycleRender;

