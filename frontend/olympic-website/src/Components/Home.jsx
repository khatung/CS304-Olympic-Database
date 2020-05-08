import React from "react";
import "./Home.scss";
import { Login, Register } from "./Login/index";

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoginActive: true,	
		};
		this.handleSuccessfulAuthentication = this.handleSuccessfulAuthentication.bind(this);
	}

	changeState(){
		const {isLoginActive} = this.state;
		if (isLoginActive) {
			this.sideButton.classList.remove("right");
			this.sideButton.classList.add("left");
		} else {
			this.sideButton.classList.remove("left");
			this.sideButton.classList.add("right");
		}

		this.setState(prevState => ({isLoginActive: !prevState.isLoginActive}));
	}

	handleSuccessfulAuthentication(data) {
		this.props.handleLogin(data);
		this.props.history.push("/main");
	}

	render() {
		const { isLoginActive } = this.state;
		const current = isLoginActive ? "Register" : "Login";
		const currentActive = isLoginActive ? "Login" : "Register";
		return (
			<div className="Home">
				<div className="login">
					<div className="container"> 
						{isLoginActive && <Login containerRef={(ref)=>this.current = ref} handleSuccessfulAuthentication={this.handleSuccessfulAuthentication}/>}
						{!isLoginActive && <Register containerRef={(ref)=>this.current = ref} handleSuccessfulAuthentication={this.handleSuccessfulAuthentication}/>}
					</div>
					<SideButton current={current} containerRef={ref => this.sideButton = ref} onClick={this.changeState.bind(this)}/>
				</div>
				<h1>{this.props.loggedInStatus}</h1>
			</div>
		);
	}
}

const SideButton = props => {
	return (
		<div className="side-button" ref={props.containerRef} onClick={props.onClick}>
			<div className="inner-container">
				<div className="text">{props.current}</div>
			</div>
		</div>
	)
}
