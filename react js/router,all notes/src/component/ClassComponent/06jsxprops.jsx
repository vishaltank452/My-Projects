import React, { Component } from 'react';

class Jsxprops extends Component {
    constructor(props) {
        super(props);
        // this.state={date:"test"}
        this.state = { date: new Date() }
    }
    componentDidMount() {
        console.log("called");
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({ date: new Date() })
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <p>JavaScript + HTML 2 + 2 = {2 + 2}</p>
                        <p>State Date Data : {this.state.date.toLocaleTimeString()}</p>
                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    </div>
                </div>

            </div>
        );
    }
}

export default Jsxprops;