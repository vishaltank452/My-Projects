import React, { Component } from 'react';
class StateExample extends Component {
    username = "data"; // declaring DataMember
    constructor(props) {
        super(props);
        this.state = {something:"value of something"}
        // this.btnClick=this.btnClick.bind(this)
    }
    something(){
        return <>JSX data</>
    }
    btnClick = ()=>{
        this.username = "Some other data"
        console.log("btn click called",this.username );
        this.setState({something:"New Data"})
    }
    
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <h2>States</h2>
                        <p>States will be store values and will be able to make changes throghout the programm execution like variable</p>
                        <p>we can access the  states data for entire Class</p>

                        <button onClick={this.btnClick}>Click me</button>
                        {this.username}
                        <p>State Data : {this.state.something}</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default StateExample;