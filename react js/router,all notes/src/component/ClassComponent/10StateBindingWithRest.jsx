import React, { Component } from 'react';

class StateBindingWithRest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        }
        // this.state = {
        //     values: {}
        // }
    }

    render() {
        return (
            <>
                <input type="text" onChange={(event) => { 
                    this.setState({ formData: { ...this.state.formData, [event.target.name]: event.target.value } }) }} name="name" id="" />

                    
                <input type="text" onChange={(event) => { return this.setState({ formData: { ...this.state.formData, [event.target.name]: event.target.value } }) }} name="password" id="" />
                <input type="text" onChange={(event) => { return this.setState({ formData: { ...this.state.formData, [event.target.name]: event.target.value } }) }} name="email" id="" />
                <input type="text" onChange={(event) => { return this.setState({ formData: { ...this.state.formData, [event.target.name]: event.target.value } }) }} name="phone" id="" />

                {/* this.setState({ ...this.state, active: false }) */}

                {/* <input type="text" onChange={(e)=>{ this.setState({...this.state.formData,})}} name="" id="" />   */}
                {JSON.stringify(this.state.formData)}
            </>
        );
    }
}

export default StateBindingWithRest;