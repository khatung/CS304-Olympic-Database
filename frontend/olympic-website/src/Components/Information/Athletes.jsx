import React from "react";

export class Athletes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query_results:[],
      age_query_result:[],
      group_query_result:[],
      sport_query_result:[],
      list_quest_sports:[],

      loaded:false,
      age_loaded:false,
      group_loaded:false,
      sport_loaded:false,
      list_quest_sports_loaded:false,

      id:"",
      name: "",
      age: "",
      sex: "",
      weight: "",
      height: "",
      gold_medal_count: "",
      silver_medal_count: "",
      bronze_medal_count: "",
      country: "",

      minage: 18,
      maxage: 100,

      group:"",
      sport_selection:""
    };

    this.ageChange = this.ageChange.bind(this);
    this.sexChange = this.sexChange.bind(this);
    this.idChange = this.idChange.bind(this);
    this.weightChange = this.weightChange.bind(this);
    this.heightChange = this.heightChange.bind(this);
    this.goldMedalChange = this.goldMedalChange.bind(this);
    this.silverMedalChange = this.silverMedalChange.bind(this);
    this.bronzeMedalChange = this.bronzeMedalChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
    this.handleinsert = this.handleinsert.bind(this);
    this.handleupdate = this.handleupdate.bind(this);
    this.handledelete = this.handledelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.minAgeChange = this.minAgeChange.bind(this);
    this.maxAgeChange = this.maxAgeChange.bind(this);
    this.handleSubmitMinMax = this.handleSubmitMinMax.bind(this);
    this.groupCriteriaChange = this.groupCriteriaChange.bind(this);
    this.handleGroupSearch = this.handleGroupSearch.bind(this);
    this.handlesportSearch = this.handlesportSearch.bind(this);
    this.sportselectionChange = this.sportselectionChange.bind(this);
    this.getSports = this.getSports.bind(this);
  }

  handleinsert(){
    let {age, sex, weight, height, gold_medal_count, silver_medal_count, bronze_medal_count, name, country} = this.state;
    if (!age || !sex || !weight || !height || !name || !country) {
      alert("Please Check Your Details");
      return;
    } else if ( parseInt(gold_medal_count) < 0 || parseInt(silver_medal_count) < 0 || parseInt(bronze_medal_count) < 0){
      alert("Please Enter Valid Medal Count");
    }


    fetch("http://localhost:3001/db/country/newAthlete", {
        method: "post",
        body: JSON.stringify({
          age : age,
          sex : sex,
          weight: weight,
          height: height,
          gold_medal_count: gold_medal_count,
          silver_medal_count : silver_medal_count,
          bronze_medal_count : bronze_medal_count,
          name: name,
          country: country,
        }),
        headers: { "Content-Type": "application/json" },
      }).then((response) => alert("Inserted"))
      .catch((error) => {
        console.log(error);
        alert("Try Again")
      });

  }

  handleupdate(){
    let {id, age, sex, weight, height, gold_medal_count, silver_medal_count, bronze_medal_count, name, country} = this.state;
    if (!age || !sex || !weight || !height || !id) {
      alert("Please Check Your Details");
      return;
    } else if ( parseInt(gold_medal_count) < 0 || parseInt(silver_medal_count) < 0 || parseInt(bronze_medal_count) < 0){
      alert("Please Enter Valid Medal Count");
    }

    fetch("http://localhost:3001/db/country/updateAthlete", {
        method: "post",
        body: JSON.stringify({
          athlete_id: id,
          age : age,
          sex : sex,
          weight: weight,
          height: height,
          gold_medal_count: gold_medal_count,
          silver_medal_count : silver_medal_count,
          bronze_medal_count : bronze_medal_count,
        }),
        headers: { "Content-Type": "application/json" },
      }).then((response) => alert("Updated"))
      .catch((error) => {
        console.log(error);
        alert("Try Again")
      });

  }

  handledelete(){
        let {id} = this.state;
    if (!id) {
      alert("Please Enter ID");
      return;
    }


    fetch("http://localhost:3001/db/country/delete/"+id, {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      }).then((response) => alert("Deleted"))
      .catch((error) => {
        console.log(error);
        alert("Try Again")
      });

  }

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
  minAgeChange(event) {
    this.setState({minage: parseInt(event.target.value)});
  }
  maxAgeChange(event) {
    this.setState({maxage: parseInt(event.target.value)});
  }
  groupCriteriaChange(event){
    this.setState({group: event.target.value});
  }
  idChange(event){
    this.setState({ id: event.target.value });
  }
  sportselectionChange(event){
    this.setState({sport_selection: event.target.value});
  }


  handleSubmit(event) {
    fetch("http://localhost:3001/db/athlete/", {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }).then((response) => response.json())
      .then((json) => {this.setState({ query_results: json, loaded:true})
          console.log("the json", json);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  handleSubmitMinMax(event){
    let {minage, maxage} = this.state;
      if (minage < 18 && maxage > 100){
        alert("enter age between 18 and 100");
        return;
      } else if (maxage < minage) {
        alert("maxage < minage ? How ? Please Change !");
      }

      fetch("http://localhost:3001/db/athlete/athletebyage", {
        method: "post",
        body: JSON.stringify({
          min : minage,
          max : maxage,
        }),
        headers: { "Content-Type": "application/json" },
      }).then((response) => response.json())
      .then((json) => {this.setState({ age_query_result: json, age_loaded:true})
          console.log("the json", json);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  handleGroupSearch(event){
      let {group} = this.state;

      fetch("http://localhost:3001/db/athlete/athleteGroup", {
        method: "post",
        body: JSON.stringify({
          parameter : group
        }),
        headers: { "Content-Type": "application/json" },
      }).then((response) => response.json())
      .then((json) => {this.setState({ group_query_result: json, group_loaded:true})
          console.log("the json", json);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  handlesportSearch(event){
      let {sport_selection} = this.state;

      if ( sport_selection === "All"){
        fetch("http://localhost:3001/db/athlete/sportDivision", {
          method: "post",
          body: JSON.stringify({
            parameter : sport_selection
          }),
          headers: { "Content-Type": "application/json" },
        }).then((response) => response.json())
        .then((json) => {this.setState({ sport_query_result: json, sport_loaded:true})
            console.log("the json", json);
        })
        .catch((error) => {
          console.log(error);
        });


      }
      else {
        fetch("http://localhost:3001/db/athlete/sportSelection", {
          method: "post",
          body: JSON.stringify({
            parameter : sport_selection
          }),
          headers: { "Content-Type": "application/json" },
        }).then((response) => response.json())
        .then((json) => {this.setState({ sport_query_result: json, sport_loaded:true})
            console.log("the json", json);
        })
        .catch((error) => {
          console.log(error);
        });

      }




  }

  renderTableHeader(){
    var { query_results, loaded } = this.state;
    console.log("renderTableHeader");

    if (!loaded){
      return (
        <tr>
          <td></td>
        </tr>
      );
    }


    let header = Object.keys(query_results[0]);
    return (header.map((key, index) => {return <th key={index}>{key.toUpperCase()}</th>;
    }));
  }

  renderTable(){
      var { query_results } = this.state;
       return query_results.map((row, index) => {
          const { id, name, age, sex, height, weight, gold_medal_count, silver_medal_count, bronze_medal_count, country } = row; //destructuring
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{sex}</td>
              <td>{height}</td>
              <td>{weight}</td>
              <td>{country}</td>
              <td>{gold_medal_count}</td>
              <td>{silver_medal_count}</td>
              <td>{bronze_medal_count}</td>
            </tr>
          );
        });
  }


  renderAgeTableHeader(){
    var { age_query_result, age_loaded } = this.state;
    console.log("renderTableHeader");

    if (!age_loaded || !age_query_result[0]){
      return (
        <tr>
          <td></td>
        </tr>
      );
    }

    let header = Object.keys(age_query_result[0]);
    return (header.map((key, index) => {return <th key={index}>{key.toUpperCase()}</th>;
    }));
  }

  renderAgeTable(){
      var { age_query_result } = this.state;
       return age_query_result.map((row, index) => {
          const { id, name, age, sex, height, weight, gold_medal_count, silver_medal_count, bronze_medal_count, country } = row; //destructuring
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{sex}</td>
              <td>{height}</td>
              <td>{weight}</td>
              <td>{country}</td>
              <td>{gold_medal_count}</td>
              <td>{silver_medal_count}</td>
              <td>{bronze_medal_count}</td>
            </tr>
          );
        });
  }

  renderGroupTableHeader(){
    var { group_query_result, group_loaded } = this.state;
    console.log("renderTableHeader");

    if (!group_loaded || !group_query_result[0]){
      return (
        <tr>
          <td></td>
        </tr>
      );
    }

    let header = Object.keys(group_query_result[0]);
    return (header.map((key, index) => {return <th key={index}>{key.toUpperCase()}</th>;
    }));
  }

  renderGroupTable(){
      var { group_query_result } = this.state;
       return group_query_result.map((row, index) => {
          const {id, name, age, sex, height, weight, gold_medal_count, silver_medal_count, bronze_medal_count, country, count } = row; //destructuring
          return (
            <tr key={id}>
              <td>{age}</td>
              <td>{sex}</td>
              <td>{height}</td>
              <td>{weight}</td>
              <td>{country}</td>
              <td>{gold_medal_count}</td>
              <td>{silver_medal_count}</td>
              <td>{bronze_medal_count}</td>
              <td>{count}</td>
            </tr>
          );
        });
  }

  getSports(){
    fetch("http://localhost:3001/db/sport", {
          method: "get",
          headers: { "Content-Type": "application/json" },
        }).then((response) => response.json())
        .then((json) => {this.setState({ list_quest_sports: json, list_quest_sports_loaded:true})
            console.log("the json", json);

        })
        .catch((error) => {
          console.log(error);
        });

  }

  renderSportList(){
      var {list_quest_sports, list_quest_sports_loaded} = this.state;

      if (!list_quest_sports_loaded || list_quest_sports_loaded[0]){
        return;
      }

      return this.state.list_quest_sports.map((row, index) => {
      const {id, name} = row; //destructuring
      return (
        <option key={id} value={name}>{name}</option>
      );}
      );
  }

  renderSportTableHeader(){
    var { sport_query_result, sport_loaded } = this.state;
    console.log("renderTableHeader");

    if (!sport_loaded || !sport_query_result[0]){
      return (
        <tr>
          <td></td>
        </tr>
      );
    }

    let header = Object.keys(sport_query_result[0]);
    return (header.map((key, index) => {return <th key={index}>{key.toUpperCase()}</th>;
    }));
  }

  renderSportTable(){
      var { sport_query_result } = this.state;
       return sport_query_result.map((row, index) => {
          const {id, name} = row; //destructuring
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
            </tr>
          );
        });
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        
        <div>
        <label htmlFor="none">ID</label>
        <input
          type="text"
          name="id"
          placeholder="id"
          onChange={this.idChange}
        />
        <label htmlFor="none">Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={this.nameChange}
        />

        <label htmlFor="none">Age</label>
        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={this.ageChange}
        />

        <label htmlFor="none">Age</label>
        <input
          type="text"
          name="sex"
          placeholder="sex"
          onChange={this.sexChange}
        />

        <label htmlFor="none">Weight</label>
        <input
          type="text"
          name="weight"
          placeholder="weightChange"
          onChange={this.weightChange}
        />

        <label htmlFor="none">Height</label>
        <input
          type="text"
          name="height"
          placeholder="height"
          onChange={this.heightChange}
        />

        <label htmlFor="none">Country</label>
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={this.countryChange}
        />

        <label htmlFor="none">Gold Medal Count</label>
        <input
          type="text"
          name="Gold Medal Count"
          placeholder="#Gold"
          onChange={this.goldMedalChange}
        />

        <label htmlFor="none">Silver Medal Count</label>
        <input
          type="text"
          name="Silver Medal Count"
          placeholder="#Gold"
          onChange={this.silverMedalChange}
        />

        <label htmlFor="none">Bronze Medal Count</label>
        <input
          type="text"
          name="Bronze Medal Count"
          placeholder="#Bronze"
          onChange={this.bronzeMedalChange}
        />

        <button type="button" className="button" onClick={() => this.handleinsert()}> Insert </button>
        <button type="button" className="button" onClick={() => this.handleupdate()}> Update </button>
        <button type="button" className="button" onClick={() => this.handledelete()}> Delete </button>
      </div>

      <div>
        <button type="button" className="button" onClick={() => this.handleSubmit()}> SHOW ALL </button>
        <table id="minTable">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTable()}
            </tbody>
          </table>
      </div>   

      <div>
      <label htmlFor="none">Min Age</label>
        <input
          type="text"
          name="min_age"
          placeholder="18"
          onChange={this.minAgeChange}
        />

      <label htmlFor="none">Max Age</label>
        <input
          type="text"
          name="max_age"
          placeholder="100"
          onChange={this.maxAgeChange}
        />

      <button type="button" className="button" onClick={() => this.handleSubmitMinMax()}> Search </button>
      </div> 

      <div>
        <table id="minTable">
            <tbody>
              <tr>{this.renderAgeTableHeader()}</tr>
              {this.renderAgeTable()}
            </tbody>
          </table>
      </div>

      <div>
        <label>
          Total Athletes Grouped By
          <select value={this.state.group} onChange={this.groupCriteriaChange}>
            <option value="A.age">Age</option>
            <option value="A.sex">Sex</option>
            <option value="A.height">Height</option>
            <option value="A.weight">Weight</option>
            <option value="A.gold_medal_count">Gold Medal Count</option>
            <option value="A.silver_medal_count">Silver Medal Count</option>
            <option value="A.bronze_medal_count">Bronze Medal Count</option>
            <option value="P.country">Country</option>
          </select>
          <button type="button" className="button" onClick={() => this.handleGroupSearch()}> Submit </button>
        </label>
      </div>

      <div>
        <table id="minTable">
            <tbody>
              <tr>{this.renderGroupTableHeader()}</tr>
              {this.renderGroupTable()}
            </tbody>
          </table>
      </div>

      <div>
        <label>
          Atheltes In Sport:
          <select value={this.state.sport_selection} onChange={this.sportselectionChange}>
            <option value="All">All</option>
            {this.renderSportList()}
          </select>
          <button type="button" className="button" onClick={() => this.getSports()}> List Sports </button>
          <button type="button" className="button" onClick={() => this.handlesportSearch()}> Submit </button>
        </label>
      </div>

      <div>
        <table id="sportTable">
            <tbody>
              <tr>{this.renderSportTableHeader()}</tr>
              {this.renderSportTable()}
            </tbody>
          </table>
      </div>
      </div>


    );
  }
}
