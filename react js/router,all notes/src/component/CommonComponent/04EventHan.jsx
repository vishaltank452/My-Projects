import React, { Component } from 'react';

class LifecycleRender extends Component {

    constructor(){
        super();
        this.event=this.event.bind(this)
        this.state={
            cource:"b.com"
        }
    }

    changeevent(){
                 console.log("hellow event hamfdling")
    }
    event(){
        console.log("bind vala event",this.state.cource)
    }
    event=()=>{
        console.log("bind vala event",this.state.cource) 
    }
    render() {
        
        return (
            <>
          
           <button onClick={this.changeevent}>click me </button> 

           <button onClick={this.event}>bind</button> 
            </>
        );
    }
}

export default LifecycleRender;

// import React from 'react';

// function LifecycleRender(props) {

//     function changeevent(){
//         console.log("hellow event hamfdling")
//     }
//     return (
//         <div>
//            <button onClick={changeevent}>click me </button> 
//         </div>
//     );
// }

// export default LifecycleRender;