import React, { Component } from "react";
import LoadImgSamefolder from "./19LoadImgSameFolder";
export default class App extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/picPublic.jpg"}
          alt="mypic"
          width="300px"
        />

        <LoadImgSamefolder/>
      </div>

    );
  }
}
