import React from "react";

export class Country extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      GoldMedalSelected: true,
      SilverMedalSelected: true,
      BronzeMedalSelected: true,
      TotalMedalSelected: true,

      minq: "",
      maxq: "",

      country_name: "",
      gold_medal_count: 0,
      silver_medal_count: 0,
      bronze_medal_count: 0,

      query_results_join:[],
      query_results:[],

      min_query_result:[],
      max_query_result:[],

      mode:1,

      loaded:false,
      loadedmin: false,
      loadedmax: false,
    };

    this.handleChangeGold = this.handleChangeGold.bind(this);
    this.handleChangeSilver = this.handleChangeSilver.bind(this);
    this.handleChangeBroze = this.handleChangeBroze.bind(this);
    this.handleChangeTotal = this.handleChangeTotal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goldInputChange = this.goldInputChange.bind(this);
    this.silverInputChange = this.silverInputChange.bind(this);
    this.bronzeInputChange = this.bronzeInputChange.bind(this);
    this.countryInputChange = this.countryInputChange.bind(this);
    this.handleinsert = this.handleinsert.bind(this);
    this.handleupdate = this.handleupdate.bind(this);
    this.handledelete = this.handledelete.bind(this);
    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
  }

  handleMinChange(event){
    this.setState({ minq: event.target.value });
  }

  handleMaxChange(event){
    this.setState({ maxq: event.target.value });
  }

  handleMinClick(){
    let url = "";
    let { minq } = this.state;
    if (minq === "gold_medal_count"){
      url = "http://localhost:3001/db/country/leastGoldMedals"
    }
    else if (minq === "silver_medal_count"){
      url = "http://localhost:3001/db/country/leastSilverMedals";
    }
    else if (minq === "bronze_medal_count"){
      url = "http://localhost:3001/db/country/leastBronzeMedals";
    }
    else if (minq === "total_medal_count"){
      url = "http://localhost:3001/db/country/leastGoldMedals";
    }

    fetch(url, {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }).then((response) => response.json())
      .then((json) => {this.setState({ min_query_result: json, loadedmin:true})
          console.log("the json", json);
      })
      .catch((error) => {
        console.log(error);
      });

  }


  handleMaxClick(){
    let url = "";
    let { maxq } = this.state;
    if (maxq === "gold_medal_count"){
      url = "http://localhost:3001/db/country/mostGoldMedals";
    }
    else if (maxq === "silver_medal_count"){
      url = "http://localhost:3001/db/country/mostSilverMedals";
    }
    else if (maxq === "bronze_medal_count"){
      url = "http://localhost:3001/db/country/mostBronzeMedals";
    }
    else if (maxq === "total_medal_count"){
      url = "http://localhost:3001/db/country/mostTotalMedals";
    }

    fetch(url, {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }).then((response) => response.json())
      .then((json) => {this.setState({ max_query_result: json, loadedmax:true})
          console.log("the json", json);
      })
      .catch((error) => {
        console.log(error);
      });

  }


  handleinsert(){
    let {country_name, gold_medal_count, silver_medal_count, bronze_medal_count} = this.state;
    if (!country_name) {
      alert("Please Enter Country Name");
      return;
    } else if ( parseInt(gold_medal_count) < 0 || parseInt(silver_medal_count) < 0 || parseInt(bronze_medal_count) < 0){
      alert("Please Enter Valid Medal Count");
    }


    fetch("http://localhost:3001/db/country/newCountry", {
        method: "post",
        body: JSON.stringify({
          country_name : country_name,
          gold_medal_count : gold_medal_count,
          silver_medal_count : silver_medal_count,
          bronze_medal_count : bronze_medal_count,
        }),
        headers: { "Content-Type": "application/json" },
      }).then((response) => alert("Inserted"))
      .catch((error) => {
        console.log(error);
        alert("Try Again")
      });
  }

  handleupdate(){
    let {country_name, gold_medal_count, silver_medal_count, bronze_medal_count} = this.state;
    if (!country_name) {
      alert("Please Enter Country Name");
      return;
    } else if ( parseInt(gold_medal_count) < 0 || parseInt(silver_medal_count) < 0 || parseInt(bronze_medal_count) < 0){
      alert("Please Enter Valid Medal Count");
    }


    fetch("http://localhost:3001/db/country/updateCountry", {
        method: "post",
        body: JSON.stringify({
          country_name : country_name,
          gold_medal_count : gold_medal_count,
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
    let {country_name, gold_medal_count, silver_medal_count, bronze_medal_count} = this.state;
    if (!country_name) {
      alert("Please Enter Country Name");
      return;
    }


    fetch("http://localhost:3001/db/country/delete/"+country_name, {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      }).then((response) => alert("Deleted"))
      .catch((error) => {
        console.log(error);
        alert("Try Again")
      });
  }

  goldInputChange(event){
    this.setState({ gold_medal_count: event.target.value });
  }

  silverInputChange(event){
    this.setState({ silver_medal_count: event.target.value });
  }

  bronzeInputChange(event){
    this.setState({ bronze_medal_count: event.target.value });
  }

  countryInputChange(event){
    this.setState({ country_name: event.target.value });
  }

  handleChangeGold(event) {
    this.setState({GoldMedalSelected: event.target.value});
  }

  handleChangeSilver(event) {
    this.setState({SilverMedalSelected: event.target.value});
  }

  handleChangeBroze(event) {
    this.setState({BronzeMedalSelected: event.target.value});
  }

  handleChangeTotal(event) {
    this.setState({TotalMedalSelected: event.target.value});
  }

  handleSubmit(event) {
    let q1 = "country_name";


    if (this.state.TotalMedalSelected){
      if (this.state.GoldMedalSelected){
        q1 = q1 + ", C.gold_medal_count";
      }

      if (this.state.SilverMedalSelected){
        q1 = q1 + ", C.silver_medal_count";
      }

      if (this.state.BronzeMedalSelected){
        q1 = q1 + ", C.bronze_medal_count";
      }

      if (this.state.TotalMedalSelected) {
        q1 = q1 + ", M.total_medal_count";
      }




      fetch("http://localhost:3001/db/country/projectCountryMedalJoin", {
        method: "post",
        body: JSON.stringify({
          project_columns : q1
        }),
        headers: { "Content-Type": "application/json" },
      }).then((response) => response.json())
      .then((json) => {this.setState({ query_results_join: json, mode:1, loaded:true})
          console.log("the json", json);
      })
      .catch((error) => {
        console.log(error);
      });

    }

    else {

      if (this.state.GoldMedalSelected){
        q1 = q1 + ", gold_medal_count";
      }

      if (this.state.SilverMedalSelected){
        q1 = q1 + ", silver_medal_count";
      }

      if (this.state.BronzeMedalSelected){
        q1 = q1 + ", bronze_medal_count";
      }


      fetch("http://localhost:3001/db/country/projectCountryMedal", {
        method: "post",
        body: JSON.stringify({
          project_columns : q1
        }),
        headers: { "Content-Type": "application/json" },
      }).then((response) => response.json())
      .then((json) => {this.setState({ query_results: json, mode:0, loaded:true})
          console.log("the json", json);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    console.log(this.state);
  }

  renderTable(){
      var { query_results_join, query_results, mode } = this.state;
      if (mode){
         return query_results_join.map((row, index) => {
            const { country_name, gold_medal_count, silver_medal_count, bronze_medal_count, total_medal_count } = row; //destructuring
            return (
              <tr key={country_name}>
                <td>{country_name}</td>
                <td>{gold_medal_count}</td>
                <td>{silver_medal_count}</td>
                <td>{bronze_medal_count}</td>
                <td>{total_medal_count}</td>
              </tr>
            );
          });

      } else {
         return query_results.map((row, index) => {
            const { country_name, gold_medal_count, silver_medal_count, bronze_medal_count } = row; //destructuring
            return (
              <tr key={country_name}>
                <td>{country_name}</td>
                <td>{gold_medal_count}</td>
                <td>{silver_medal_count}</td>
                <td>{bronze_medal_count}</td>
              </tr>
            );
          });


      }
  }


  renderMinTable(){
    var { min_query_result } = this.state;
       return min_query_result.map((row, index) => {
          const { country_name, gold_medal_count, silver_medal_count, bronze_medal_count, total_medal_count } = row; //destructuring
          return (
            <tr key={country_name}>
              <td>{country_name}</td>
              <td>{gold_medal_count}</td>
              <td>{silver_medal_count}</td>
              <td>{bronze_medal_count}</td>
              <td>{total_medal_count}</td>
            </tr>
          );
        });

  }


  renderMaxTable(){
    var { max_query_result } = this.state;
       return max_query_result.map((row, index) => {
          const { country_name, gold_medal_count, silver_medal_count, bronze_medal_count, total_medal_count } = row; //destructuring
          return (
            <tr key={country_name}>
              <td>{country_name}</td>
              <td>{gold_medal_count}</td>
              <td>{silver_medal_count}</td>
              <td>{bronze_medal_count}</td>
              <td>{total_medal_count}</td>
            </tr>
          );
        });

  }


  renderTableHeader(){
    var { query_results_join, query_results, mode, loaded } = this.state;
    console.log("renderTableHeader");

    if (!loaded){
      return (
        <tr>
          <td></td>
        </tr>
      );
    }


    if(mode){
        let header = Object.keys(query_results_join[0]);
        return (header.map((key, index) => { return <th key={index}>{key.toUpperCase()}</th>;
      }));

    } else {
      let header = Object.keys(query_results[0]);
      return (header.map((key, index) => {return <th key={index}>{key.toUpperCase()}</th>;
      }));
    }
  }

    renderMinTableHeader(){
    var { min_query_result, loadedmin } = this.state;

    if (!loadedmin){
      return (
        <tr>
          <td></td>
        </tr>
      );
    }


      let header = Object.keys(min_query_result[0]);
      return (header.map((key, index) => {return <th key={index}>{key.toUpperCase()}</th>;
      }));
  }

  renderMaxTableHeader(){
    var { max_query_result, loadedmax } = this.state;

    if (!loadedmax){
      return (
        <tr>
          <td></td>
        </tr>
      );
    }


      let header = Object.keys(max_query_result[0]);
      return (header.map((key, index) => {return <th key={index}>{key.toUpperCase()}</th>;
      }));
  }



  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>

            <div>
        <label htmlFor="none">Country Name</label>
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={this.countryInputChange}
        />

        <label htmlFor="none">Gold Medal Count</label>
        <input
          type="text"
          name="Gold Medal Count"
          placeholder="#Gold"
          onChange={this.goldInputChange}
        />

        <label htmlFor="none">Silver Medal Count</label>
        <input
          type="text"
          name="Silver Medal Count"
          placeholder="#Gold"
          onChange={this.silverInputChange}
        />

        <label htmlFor="none">Bronze Medal Count</label>
        <input
          type="text"
          name="Bronze Medal Count"
          placeholder="#Bronze"
          onChange={this.bronzeInputChange}
        />

        <button type="button" className="button" onClick={() => this.handleinsert()}> Insert </button>
        <button type="button" className="button" onClick={() => this.handleupdate()}> Update </button>
        <button type="button" className="button" onClick={() => this.handledelete()}> Delete </button>
      </div>

      <div className="projectionfields">
          <label>
            Gold Medals: 
            <select value={this.state.GoldMedalSelected} onChange={this.handleChangeGold}>
              <option value="true">Yes</option>
              <option value="">No</option>
            </select>
          </label>

          <label>
            Silver Medals: 
            <select value={this.state.SilverMedalSelected} onChange={this.handleChangeSilver}>
              <option value="true">Yes</option>
              <option value="">No</option>
            </select>
          </label>

          <label>
            Bronze Medals: 
            <select value={this.state.BronzeMedalSelected} onChange={this.handleChangeBroze}>
              <option value="true">Yes</option>
              <option value="">No</option>
            </select>
          </label>

          <label>
            Total Medals: 
            <select value={this.state.TotalMedalSelected} onChange={this.handleChangeTotal}>
              <option value="true">Yes</option>
              <option value="">No</option>
            </select>
          </label>
          <button type="button" className="button" onClick={this.handleSubmit}>Submit</button>
      </div> 

      <div>
        <table id="countryTable">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTable()}
            </tbody>
          </table>
      </div>
          <label>
            Min:
            <select value={this.state.minq} onChange={this.handleMinChange}>
              <option value="gold_medal_count">Gold Medal</option>
              <option value="silver_medal_count">Silver Medal</option>
              <option value="bronze_medal_count">Bronze Medal</option>
              <option value="total_medal_count">Total Medal</option>
            </select>
            <button type="button" className="button" onClick={() => this.handleMinClick()}> Submit </button>
          </label>

          <table id="minTable">
            <tbody>
              <tr>{this.renderMinTableHeader()}</tr>
              {this.renderMinTable()}
            </tbody>
          </table>

          <label>
            Max:
            <select value={this.state.maxq} onChange={this.handleMaxChange}>
              <option value="gold_medal_count">Gold Medal</option>
              <option value="silver_medal_count">Silver Medal</option>
              <option value="bronze_medal_count">Bronze Medal</option>
              <option value="total_medal_count">Total Medal</option>
            </select>
            <button type="button" className="button" onClick={() => this.handleMaxClick()}> Submit </button>
          </label>

          <table id="maxTable">
            <tbody>
              <tr>{this.renderMaxTableHeader()}</tr>
              {this.renderMaxTable()}
            </tbody>
          </table>

      <div>

      </div>  
      </div>
    );
  }
}
