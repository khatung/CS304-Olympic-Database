import React from "react";
import olympic from "../olympic.jpg";
import olympicicon from "../olympicicon.png";
import "./Main.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state is by default an object
      query1s: [],
      query2s: [],
      query3s: [],
      query4s: [],
      query5s: [],
      query6s: [],
      query7s: [],
      isLoaded1: false,
      isLoaded2: false,
      isLoaded3: false,
      isLoaded4: false,
      isLoaded5: false,
      isLoaded6: false,
      isLoaded7: false,
      age: "",
      sex: "",
      weight: "",
      height: "",
      gold_medal_count: "",
      silver_medal_count: "",
      bronze_medal_count: "",
      name: "",
      country: "",
      athlete_id: "",
      minage: "",
      maxage: "",
    };
    this.ageChange = this.ageChange.bind(this);
    this.sexChange = this.sexChange.bind(this);
    this.weightChange = this.weightChange.bind(this);
    this.heightChange = this.heightChange.bind(this);
    this.goldMedalChange = this.goldMedalChange.bind(this);
    this.silverMedalChange = this.silverMedalChange.bind(this);
    this.bronzeMedalChange = this.bronzeMedalChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
    this.athleteIdChange = this.athleteIdChange.bind(this);
    this.minageChange = this.minageChange.bind(this);
    this.maxageChange = this.maxageChange.bind(this);
  }
  queryHandler = (query) => {
    console.log(query);
    var path;
    switch (query) {
      case "query1":
        path = "http://localhost:3001/db/country/oneGoldMin";
        break;
      case "query2":
        path = "http://localhost:3001/db/participant/getCountries";
        break;
      case "query3":
        path =
          "http://localhost:3001/db/participant/ageBetweenSport/" +
          this.state.minage +
          "/" +
          this.state.maxage;
        break;
      case "query4":
        path = "http://localhost:3001/db/country/mostGoldMedals";
        break;
      case "query5":
        path = "http://localhost:3001/db/athlete/numAthleteAgeCountry";
        break;
      case "query6":
        path = "http://localhost:3001/db/country/participateAllSports";
        break;
      case "query7":
        path = "http://localhost:3001/db/athlete/";
        break;
      default:
        return;
    }

    fetch(path, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        switch (query) {
          case "query1":
            this.setState({
              isLoaded1: true,
              query1s: json,
            });
            break;
          case "query2":
            this.setState({
              isLoaded2: true,
              query2s: json,
            });
            break;
          case "query3":
            this.setState({
              isLoaded3: true,
              query3s: json,
            });
            break;
          case "query4":
            this.setState({
              isLoaded4: true,
              query4s: json,
            });
            break;
          case "query5":
            this.setState({
              isLoaded5: true,
              query5s: json,
            });
            break;
          case "query6":
            this.setState({
              isLoaded6: true,
              query6s: json,
            });
            break;
          case "query7":
            this.setState({
              isLoaded7: true,
              query7s: json,
            });
            break;
        }
        console.log("the json", json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderTable1() {
    var { isLoaded1, query1s } = this.state;

    if (!isLoaded1)
      return (
        <tr>
          <td></td>
        </tr>
      );
    return query1s.map((row, index) => {
      const { country_name, gold_medal_count } = row; //destructuring
      return (
        <tr key={country_name}>
          <td>{country_name}</td>
          <td>{gold_medal_count}</td>
        </tr>
      );
    });
  }
  renderTable2() {
    var { isLoaded2, query2s } = this.state;

    if (!isLoaded2)
      return (
        <tr>
          <td></td>
        </tr>
      );
    return query2s.map((row, index) => {
      const { name, country } = row; //destructuring
      return (
        <tr key={name + country}>
          <td>{name}</td>
          <td>{country}</td>
        </tr>
      );
    });
  }
  renderTable3() {
    var { isLoaded3, query3s } = this.state;
    if (!isLoaded3)
      return (
        <tr>
          <td></td>
        </tr>
      );
    return query3s.map((row, index) => {
      const { name, age, sport, country } = row; //destructuring
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{age}</td>
          <td>{sport}</td>
          <td>{country}</td>
        </tr>
      );
    });
  }
  renderTable4() {
    var { isLoaded4, query4s } = this.state;

    if (!isLoaded4)
      return (
        <tr>
          <td></td>
        </tr>
      );
    return query4s.map((row, index) => {
      const { country_name, gold_medal_count } = row; //destructuring
      return (
        <tr key={country_name}>
          <td>{country_name}</td>
          <td>{gold_medal_count}</td>
        </tr>
      );
    });
  }
  renderTable5() {
    var { isLoaded5, query5s } = this.state;

    if (!isLoaded5)
      return (
        <tr>
          <td></td>
        </tr>
      );
    return query5s.map((row, index) => {
      const { country, number_of_athletes, average } = row; //destructuring
      return (
        <tr key={country}>
          <td>{country}</td>
          <td>{number_of_athletes}</td>
          <td>{average}</td>
        </tr>
      );
    });
  }
  renderTable6() {
    var { isLoaded6, query6s } = this.state;

    if (!isLoaded6)
      return (
        <tr>
          <td></td>
        </tr>
      );
    return query6s.map((row, index) => {
      const { nationality } = row; //destructuring
      return (
        <tr key={nationality}>
          <td>{nationality}</td>
        </tr>
      );
    });
  }
  deleteAthleteID = (ID) => {
    this.setState({ athlete_id: ID });
    console.log("delete ID", ID);
    this.deleteAthlete();
  };
  renderTable7() {
    var { isLoaded7, query7s } = this.state;

    if (!isLoaded7)
      return (
        <tr>
          <td></td>
        </tr>
      );
    return query7s.map((row, index) => {
      const {
        athlete_id,
        age,
        sex,
        weight,
        height,
        gold_medal_count,
        silver_medal_count,
        bronze_medal_count,
        participant_id,
      } = row; //destructuring
      return (
        <tr key={index}>
          <td>{athlete_id}</td>
          <td>{age}</td>
          <td>{sex}</td>
          <td>{weight}</td>
          <td>{height}</td>
          <td>{gold_medal_count}</td>
          <td>{silver_medal_count}</td>
          <td>{bronze_medal_count}</td>
          <td>{participant_id}</td>
          <td>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => this.deleteAthleteID(athlete_id)}
            >
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  }
  renderTableHeader = (query) => {
    var isLoaded;
    var querys;
    switch (query) {
      case "query1":
        isLoaded = this.state.isLoaded1;
        querys = this.state.query1s;
        break;
      case "query2":
        isLoaded = this.state.isLoaded2;
        querys = this.state.query2s;
        break;
      case "query3":
        isLoaded = this.state.isLoaded3;
        querys = this.state.query3s;
        break;
      case "query4":
        isLoaded = this.state.isLoaded4;
        querys = this.state.query4s;
        break;
      case "query5":
        isLoaded = this.state.isLoaded5;
        querys = this.state.query5s;
        break;
      case "query6":
        isLoaded = this.state.isLoaded6;
        querys = this.state.query6s;
        break;
      case "query7":
        isLoaded = this.state.isLoaded7;
        querys = this.state.query7s;
        break;
    }

    if (!isLoaded) return <th></th>;
    let header = Object.keys(querys[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  ageChange(event) {
    this.setState({ age: event.target.value });
  }
  sexChange(event) {
    this.setState({ sex: event.target.value });
  }
  weightChange(event) {
    this.setState({ weight: event.target.value });
  }
  heightChange(event) {
    this.setState({ height: event.target.value });
  }
  goldMedalChange(event) {
    this.setState({ gold_medal_count: event.target.value });
  }
  silverMedalChange(event) {
    this.setState({ silver_medal_count: event.target.value });
  }
  bronzeMedalChange(event) {
    this.setState({ bronze_medal_count: event.target.value });
  }
  nameChange(event) {
    this.setState({ name: event.target.value });
  }
  countryChange(event) {
    this.setState({ country: event.target.value });
  }
  athleteIdChange(event) {
    this.setState({ athlete_id: event.target.value });
  }
  minageChange(event) {
    this.setState({ minage: event.target.value });
  }
  maxageChange(event) {
    this.setState({ maxage: event.target.value });
  }
  isEmpty(value) {
    return value == null || value.length === 0;
  }
  insertAthlete() {
    var {
      age,
      sex,
      height,
      weight,
      gold_medal_count,
      silver_medal_count,
      bronze_medal_count,
      name,
      country,
    } = this.state;
    if (
      this.isEmpty(age) ||
      this.isEmpty(sex) ||
      this.isEmpty(height) ||
      this.isEmpty(weight) ||
      this.isEmpty(gold_medal_count) ||
      this.isEmpty(bronze_medal_count) ||
      this.isEmpty(silver_medal_count) ||
      this.isEmpty(name) ||
      this.isEmpty(country)
    ) {
      console.log("Not Fill in enough Infor");
      console.log(gold_medal_count, silver_medal_count, bronze_medal_count);
      return;
    }
    let newPost = {
      age: age,
      sex: sex,
      height: height,
      weight: weight,
      gold_medal_count: gold_medal_count,
      silver_medal_count: silver_medal_count,
      bronze_medal_count: bronze_medal_count,
      name: name,
      country: country,
    };
    fetch("http://localhost:3001/db/athlete/newAthlete", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("post request response data", data);
      });
  }
  deleteAthlete() {
    let url =
      "http://localhost:3001/db/athlete/delete/" + this.state.athlete_id;
    fetch(url, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("delete request response data", data);
      });
  }
  updateAthlete() {
    var {
      athlete_id,
      age,
      sex,
      height,
      weight,
      gold_medal_count,
      silver_medal_count,
      bronze_medal_count,
      name,
      country,
    } = this.state;
    if (
      this.isEmpty(athlete_id) ||
      this.isEmpty(age) ||
      this.isEmpty(sex) ||
      this.isEmpty(height) ||
      this.isEmpty(weight) ||
      this.isEmpty(gold_medal_count) ||
      this.isEmpty(bronze_medal_count) ||
      this.isEmpty(silver_medal_count) ||
      this.isEmpty(name) ||
      this.isEmpty(country)
    ) {
      console.log("Not Fill in enough Infor");
      console.log(gold_medal_count, silver_medal_count, bronze_medal_count);
      return;
    }
    let newPost = {
      athlete_id: athlete_id,
      age: age,
      sex: sex,
      height: height,
      weight: weight,
      gold_medal_count: gold_medal_count,
      silver_medal_count: silver_medal_count,
      bronze_medal_count: bronze_medal_count,
      name: name,
      country: country,
    };
    fetch("http://localhost:3001/db/athlete/update", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("put request response data", data);
      });
  }
  render() {
    // if (this.props.loggedInStatus === "NOT_LOGGED_IN")
    //   return (
    //     <div
    //       className="Main"
    //       style={{
    //         backgroundImage: `url(${olympic})`,
    //         minHeight: "100%",
    //         minWidth: "100%",
    //       }}
    //     >
    //       <h1>OLYMPIC 2020</h1>
    //       <h1>{this.props.loggedInStatus}</h1>
    //     </div>
    //   );
    //Main Page
    return (
      <div
        className="Main"
        style={{
          backgroundImage: `url(${olympic})`,
          minHeight: "100%",
          minWidth: "100%",
          border: "1px solid red",
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
        </div>
        <div>
          <h1>WELCOME TO OLYMPIC 2020</h1>
          <h4>
            The modern Olympic Games or Olympics are leading international
            sporting events featuring summer and winter sports competitions in
            which thousands of athletes from around the world participate in a
            variety of competitions. The Olympic Games are considered the
            world's foremost sports competition with more than 200 nations
            participating. The Olympic Games are held every four years,
            alternating between the Summer and Winter Games every two years in
            the four-year period.
          </h4>
          <h3>
            You can search for some information about Olympic this year below
          </h3>
          <h4>Athlete Infor</h4>
        </div>
        <div
          className="form"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Age
            </label>
            <input
              type="text"
              name="age"
              placeholder="In number"
              onChange={this.ageChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Sex
            </label>
            <input
              type="text"
              name="sex"
              placeholder="male/female"
              onChange={this.sexChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Height
            </label>
            <input
              type="text"
              name="height"
              placeholder="In cm"
              onChange={this.heightChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Weight
            </label>
            <input
              type="text"
              name="weight"
              placeholder="In Kg"
              onChange={this.weightChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              gold medal count
            </label>
            <input
              type="text"
              name="gold"
              placeholder="number"
              onChange={this.goldMedalChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              silver medal count
            </label>
            <input
              type="text"
              name="silver"
              placeholder="number"
              onChange={this.silverMedalChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              bronze medal count
            </label>
            <input
              type="text"
              name="bronze"
              placeholder="number"
              onChange={this.bronzeMedalChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Name
            </label>
            <input
              type="text"
              name="id"
              placeholder="Athelete Name"
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Country
            </label>
            <input
              type="text"
              name="id"
              placeholder="Nationality"
              onChange={this.countryChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Delete/Update Athlete with this ID
            </label>
            <input
              type="text"
              name="id"
              placeholder="Athlete ID number"
              onChange={this.athleteIdChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.insertAthlete()}
          >
            ADD
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.updateAthlete()}
          >
            UPDATE
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.deleteAthlete()}
          >
            DELETE
          </button>
        </div>
        <div>
          <span style={{ backgroundColor: "black", color: "white" }}>
            Athletes Information{" "}
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query7")}
          >
            SHOW
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.setState({ isLoaded7: false })}
          >
            HIDE
          </button>
          <table
            id="table7"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <tbody>
              <tr>{this.renderTableHeader("query7")}</tr>
              {this.renderTable7()}
            </tbody>
          </table>
        </div>
        <div>
          <span style={{ backgroundColor: "black", color: "white" }}>
            Countries with gold medels{" "}
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query1")}
          >
            SHOW
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.setState({ isLoaded1: false })}
          >
            HIDE
          </button>
          <table
            id="table1"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <tbody>
              <tr>{this.renderTableHeader("query1")}</tr>
              {this.renderTable1()}
            </tbody>
          </table>
        </div>
        <div>
          <span style={{ backgroundColor: "black", color: "white" }}>
            {" "}
            Athletes' Nationality
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query2")}
          >
            SHOW
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.setState({ isLoaded2: false })}
          >
            HIDE
          </button>
          <table
            id="table2"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <tbody>
              <tr>{this.renderTableHeader("query2")}</tr>
              {this.renderTable2()}
            </tbody>
          </table>
        </div>
        <div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Min Age
            </label>
            <input
              type="text"
              name="minage"
              placeholder="In number"
              onChange={this.minageChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="none"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Max Age
            </label>
            <input
              type="text"
              name="maxage"
              placeholder="In number"
              onChange={this.maxageChange}
            />
          </div>
          <span style={{ backgroundColor: "black", color: "white" }}>
            {" "}
            Athletes between this age range
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query3")}
          >
            SHOW
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.setState({ isLoaded3: false })}
          >
            HIDE
          </button>
          <table
            id="table3"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <tbody>
              <tr>{this.renderTableHeader("query3")}</tr>
              {this.renderTable3()}
            </tbody>
          </table>
        </div>
        <div>
          <span style={{ backgroundColor: "black", color: "white" }}>
            {" "}
            Countries with most Gold Medal
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query4")}
          >
            SHOW
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.setState({ isLoaded4: false })}
          >
            HIDE
          </button>
          <table
            id="table4"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <tbody>
              <tr>{this.renderTableHeader("query4")}</tr>
              {this.renderTable4()}
            </tbody>
          </table>
        </div>
        <div>
          <span style={{ backgroundColor: "black", color: "white" }}>
            Each country's number of athletes
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query5")}
          >
            SHOW
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.setState({ isLoaded5: false })}
          >
            HIDE
          </button>
          <table
            id="table5"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <tbody>
              <tr>{this.renderTableHeader("query5")}</tr>
              {this.renderTable5()}
            </tbody>
          </table>
        </div>
        <div>
          <span style={{ backgroundColor: "black", color: "white" }}>
            Countries participate in all sports
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query6")}
          >
            SHOW
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.setState({ isLoaded6: false })}
          >
            HIDE
          </button>
          <table
            id="table6"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <tbody>
              <tr>{this.renderTableHeader("query6")}</tr>
              {this.renderTable6()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
