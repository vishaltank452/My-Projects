import React, { Component } from "react";
import pic from "./pic.jpg";
export default class App extends Component {
  render() {
    return (
      <div>
         <img src={process.env.PUBLIC_URL + "/pic.jpg"} alt="mypic public folder" width="300px" />
        <img src={pic} alt="mypic imported" width="300px" />
        {/* <img src="./../pic.jpg" alt="same folder" width="300px" />
        <img src="./pic.jpg" alt="same folder" width="300px" /> */}
        {/* <img src={'./src/component/ClassComponent/pic.jpg'} alt="same folder" width="300px" /> */}
        <img src='./pic.jpg' alt="same folder" width="300px" />
      </div>
    );
  }
}
