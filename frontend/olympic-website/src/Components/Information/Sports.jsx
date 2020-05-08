import React from "react";

export class Sports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query_results:[],
      loaded:false,
    };

    this.Search = this.Search.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
  }  

  Search(){
    fetch("http://localhost:3001/db/sport/allevent", {
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

  renderTableHeader(){
    var { query_results, loaded } = this.state;
    console.log("renderTableHeader");

    if (!loaded || !query_results[0]){
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
          const { sport_id, sport_name, event_id, event_name, date, city, street, zip_code, venue_name } = row; //destructuring
          return (
            <tr key={sport_id}>
              <td>{sport_id}</td>
              <td>{sport_name}</td>
              <td>{event_id}</td>
              <td>{event_name}</td>
              <td>{date}</td>
              <td>{city}</td>
              <td>{street}</td>
              <td>{zip_code}</td>
              <td>{venue_name}</td>
            </tr>
          );
        });

  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <button type="button" className="button" onClick={() => this.Search()}> Show All Sports And Events </button>
          <div>
            <table id="minTable">
              <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTable()}
              </tbody>
            </table>
          </div>
      </div>

    );
  }
}
