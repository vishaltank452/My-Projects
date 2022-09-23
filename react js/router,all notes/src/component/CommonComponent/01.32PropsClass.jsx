import React, { Component } from 'react';

class PropsClass extends Component {
    render() {
        return (
            <>
              <h1>helllow {this.props.class}</h1> 
               
            </>
        );
    }
}

export default PropsClass;