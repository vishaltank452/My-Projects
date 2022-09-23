import React, { Component } from 'react';

// class Example{
//     constructor(props) {
//         console.log("parent Const");
//     }
//     something(){
//         console.log("parent something");
//     }
// }

class ConstructorExample extends Component {
    // let username = "data";
    username = "data"; // declaring DataMember
    constructor(props) {
        console.log("child Const");
        // let username = "data inside cons";
        // console.log(this.username); // we cnt access DM before SUPER()
        super(props);
        console.log(this.username); // accessing DM with the help of this keyword
        this.btnClick=this.btnClick.bind(this)
    }

    something(){
        return <>JSX data</>
    }
    btnClick(){
        this.username = "Some other data"
        console.log("btn click called",this.username );
    }
    username(){
        
    }
    
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <h2>Constructor</h2>
                        <p><strong>Constructor</strong> is a method which is invoked by default when its calling</p>
                        <p><strong>Super</strong> with the help of super() we can explicitly calling parent class constructor </p>
                        <p><b>calling method from this keyword</b> {this.something()} </p>
                        <p><strong>this</strong>, this keyword will helps to access the class datamembers and member functions</p>
                        {/* <button onClick={this.btnClick()}>Click me</button> */}
                        <button onClick={this.btnClick}>Click me</button>
                        {this.username}
                    </div>
                </div>
            </div>
        );
    }
}

export default ConstructorExample;