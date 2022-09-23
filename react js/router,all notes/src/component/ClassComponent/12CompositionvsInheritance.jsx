import React, { Component } from 'react';
import "./style.css"
class CompositionvsInheritance extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: '' };
    }
    handleChange(e) {
        this.setState({ login: e.target.value });
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p> React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.</p>

                            <p> In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.</p>
                        </div>
                    </div>
                </div>
                <Dialog title="Mars Exploration Program" message="How should we refer to you?">

                    <input value={this.state.login}
                        onChange={this.handleChange} />
                    <button onClick={this.handleSignUp}>
                        Sign Me Up!
                    </button>
                </Dialog>
            </>
        );
    }
}
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children} {/* Composition */} 
            {/* <Dialog/> inheritance */}
        </div>
    )
}
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                dialog compo
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
           
        </FancyBorder>
    );
}
export default CompositionvsInheritance;