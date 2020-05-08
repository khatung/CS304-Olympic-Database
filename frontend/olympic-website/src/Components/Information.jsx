import React from "react";
import "./Main.css";
import olympic from "../olympic.jpg";
import { Link } from "react-router-dom";
import { Country, Athletes, Sports, User } from "./Information/index";

export default class Information extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "Country",
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(newMode) {
    this.setState({ mode: newMode });
  }

  render() {
    return (
      <div
        className="Information"
        style={{
          backgroundImage: `url(${olympic})`,
          minHeight: "100%",
          minWidth: "100%",
          width: "500px",
          float: "left",
          height: "500px",
          position: "relative",
          overflowY: "scroll",
        }}
      >
        <div id="navbar">
          <a href="http://localhost:3000/main" id="logo">
            OLYMPIC 2020
          </a>
          <div id="navbar-right">
            <a class="active" href="http://localhost:3000/main">
              Home
            </a>
            <a href="http://localhost:3000/information">Infor</a>
            <a href="http://localhost:3000/">Log Out</a>
          </div>
        </div>
        <div>
          <h1>OLYMPIC 2020</h1>
          <h1>Search for Olympic Information with 4 categories below</h1>
        </div>
        <div className="Top_level_view" style={{ position: "relative" }}>
          <button
            type="button"
            className="btn"
            onClick={() => this.changeMode("Country")}
          >
            {" "}
            Country{" "}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => this.changeMode("Athletes")}
          >
            {" "}
            Athletes{" "}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => this.changeMode("Sports")}
          >
            {" "}
            Sports & Events{" "}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => this.changeMode("Users")}
          >
            {" "}
            Users{" "}
          </button>
        </div>
        <div className="container">
          {this.state.mode === "Country" && (
            <Country containerRef={(ref) => (this.current = ref)} />
          )}
          {this.state.mode === "Athletes" && (
            <Athletes containerRef={(ref) => (this.current = ref)} />
          )}
          {this.state.mode === "Sports" && (
            <Sports containerRef={(ref) => (this.current = ref)} />
          )}
          {this.state.mode === "Users" && (
            <User containerRef={(ref) => (this.current = ref)} />
          )}
        </div>
      </div>
    );
  }
}
