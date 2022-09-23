import React, { Component } from 'react';
import CSS3 from './17CSS3';

class Controlledexample extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Without Arrow Function if we create any function we need to be bind that function in constructor START
    // handleChange(){ console.log("called");}
    // handleSubmit(){ console.log("called"); }
    // Without Arrow Function if we create any function we need to be bind that function in constructor END

    // With Arrow Function if we create any function we donet required to bind it anywher START
    handleChange = (kaipn) => {
        console.log(kaipn);
        console.log(kaipn.target);
        this.setState({ value: kaipn.target.value });
        // console.log("called");     
    }
    handleSubmit = (event) => {
        console.log("submit");
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    // With Arrow Function if we create any function we donet required to bind it anywher END

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>
                                In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
                            </p>
                            <p>
                                We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a <q>controlled component</q>.
                            </p>

                            <p>
                                For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
                            </p>
                            <CSS3/>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Name:
                                    <input type="text" value={this.state.value} onChange={this.handleChange} />{this.state.value}
                                    <input type="text" value={this.state.value} onChange={this.handleChange} />{this.state.value}
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Controlledexample;