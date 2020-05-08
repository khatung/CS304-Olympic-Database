import React from "react";

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query_results:[],

      user_id: "",
      username: "",
      password: "",
      permission: "FALSE",

      loaded:false,
    };

    this.Search = this.Search.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.idChange = this.idChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.permissionChange = this.permissionChange.bind(this);

    this.handleinsert = this.handleinsert.bind(this);
    this.handleupdate = this.handleupdate.bind(this);
    this.handledelete = this.handledelete.bind(this);

  }  

  handleinsert(){
    let {username, password, permission} = this.state;
    if (!username || !password || (permission !== "TRUE" && permission !== "FALSE")) {
      alert("Please Check Your Details");
      return;
    }


    fetch("http://localhost:3001/user/register", {
        method: "post",
        body: JSON.stringify({
          login : username,
          password : password,
          permission: permission,
          }),
        headers: { "Content-Type": "application/json" },
      }).then((response) => alert("Inserted"))
      .catch((error) => {
        console.log(error);
        alert("Try Again")
      });

  }

  handleupdate(){
    let {user_id, username, password, permission} = this.state;
    if (!user_id || !username || !password || (permission !== "TRUE" && permission !== "FALSE") ){
      alert("Please Check Your Details");
      return;
    }


    fetch("http://localhost:3001/user/update", {
        method: "post",
        body: JSON.stringify({
          user_id : user_id,
          login : username,
          password : password,
          permission: permission,
          }),
        headers: { "Content-Type": "application/json" },
      }).then((response) => alert("Inserted"))
      .catch((error) => {
        console.log(error);
        alert("Try Again")
      });

  }

  handledelete(){
    let {user_id} = this.state;
    if (!user_id) {
      alert("Please Enter User ID");
      return;
    }

    let id = user_id;
    fetch("http://localhost:3001/user/delete/"+id, {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      }).then((response) => alert("Deleted"))
      .catch((error) => {
        console.log(error);
        alert("Try Again")
      });

  }

  idChange(event){this.setState({ user_id: event.target.value });}
  usernameChange(event){this.setState({ username: event.target.value });}
  passwordChange(event){this.setState({ password: event.target.value });}
  permissionChange(event){this.setState({ permission: event.target.value });}

  Search(){
    fetch("http://localhost:3001/user/", {
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
          const { user_id, login, password, permission} = row; //destructuring
          return (
            <tr key={user_id}>
              <td>{user_id}</td>
              <td>{login}</td>
              <td>{password}</td>
              <td>{permission}</td>
            </tr>
          );
        });

  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div>
        <label htmlFor="none">User ID</label>
        <input
          type="text"
          name="id"
          placeholder="id"
          onChange={this.idChange}
        />
        <label htmlFor="none">Username</label>
        <input
          type="text"
          name="name"
          placeholder="username"
          onChange={this.usernameChange}
        />

        <label htmlFor="none">password</label>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={this.passwordChange}
        />

        <label htmlFor="none">permission</label>
        <input
          type="text"
          name="permission"
          placeholder="TRUE/FALSE"
          onChange={this.permissionChange}
        />

        <button type="button" className="button" onClick={() => this.handleinsert()}> Insert </button>
        <button type="button" className="button" onClick={() => this.handledelete()}> Delete </button>
      </div>

        <div>
        <button type="button" className="button" onClick={() => this.Search()}> Show All Users </button>
          <div>
            <table id="minTable">
              <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTable()}
              </tbody>
            </table>
          </div>
         </div>
         <div>
         </div> 
      </div>

    );
  }
}
