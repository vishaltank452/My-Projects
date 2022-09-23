import React, { Component } from "react";
import "./index.css"

export default class CSS3 extends Component {
  state = {
    change: false
  };
  clickHandle = () => {
    this.setState({ change: true });
  };
  render() {
    const btnStyle = {
      color: "blue",
      backgroundColor: "orange"
    };
    if (this.state.change) {
      btnStyle.backgroundColor = "white";
    }
    return (
      <>
        <button onClick={this.clickHandle} className="btn btn-primary my-class" style={btnStyle}>
          Button
        </button>
        <button onClick={this.clickHandle} style={{
          color: "blue",
          backgroundColor: "orange"
        }}>
          Button
        </button>
      </>
    );
  }
}
