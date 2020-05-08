import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  usernameChange(event) {
    this.setState({ username: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

	handleSubmit(){
		const username = this.state.username;
		const password = this.state.password;

		if (!username) {
			alert("Please enter your username!");
		} else if (!password) {
			alert("Please enter your password!");
		} else {
			fetch('http://localhost:3001/user/login', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					login: username,
					password: password
				})
			})
			.then(response => 
    			response.json().then(data => ({
        			data: data,
        			status: response.status,
    			}))
			).then(res => {
    			console.log(res.status, res.data);
    			var data = res.data[0];
    			if(data){
    				this.props.handleSuccessfulAuthentication(data);
    			}
			})
			.catch(error => {console.log(error)});
		}
	}

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={this.usernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={this.passwordChange}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            type="button"
            className="btn"
            onClick={() => this.handleSubmit()}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
