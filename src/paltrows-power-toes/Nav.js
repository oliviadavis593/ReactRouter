import React, { Component } from "react";
import Content from "./Content";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <Content className="Nav">
        {/*Link will allow you to go to another part
          of the webpage - w/o an entire reload 
        */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/workouts">Workouts</Link>
      </Content>
    );
  }
}
