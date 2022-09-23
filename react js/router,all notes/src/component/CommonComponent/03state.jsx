import React, { Component } from 'react';

class State extends Component {
    constructor(){
        console.warn("cons is calls")
        super();
       this.state={
        msg:"technical suneja youtube channel",
        name:"vishal",
        email:"vishaltank452@gmail.com",
        count:0,        
       }}
   
    sub(){
        this.setState({
            msg:"thanks for subsctibing out channel",
            
        })
    }
    sub1(){
        this.setState({
           
            count:this.state.count+1
        })
    }
   
 
    render() {
        console.warn("render call")
        return (
            <>
                <h2> {this.state.msg}</h2>
                <button onClick={()=>{this.sub()}} className="btn btn-outline-dark">subscribe</button>
                <h1>hellow {this.state.name}</h1>
                <button onClick={()=>{this.sub1()}} className="btn btn-outline-success">click</button>
                <h1>{this.state.count}</h1>

            </>
        );
    }
}

export default State;