import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = { something: "value of something" }
        console.log("constructor");
    }

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    componentDidMount() {
        console.log("componentDidMount");

    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate",nextProps,nextState);
        // return false
        return true
    }
    
    // componentWillUpdate(nextProps, nextState) {
        //     console.log("componentWillUpdate");
    // }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("shouldComponentUpdate",prevProps,prevState);
        console.log("componentDidUpdate");

    }

    componentWillUnmount() {
        console.log("componentWillUnmount");

    }
    btnClick = () => {
        console.log("btn click called", this.username);
        this.setState({ something: "New Data" })
    }
    render() {
        console.log("render");
        return (
            <div>
                <button onClick={this.btnClick}>Click me</button>
                <p>State Data : {this.state.something}</p>
            </div>
        );
    }
}

export default Lifecycle;