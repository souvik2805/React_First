import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
	constructor(){
		super();
		this.state= {'color':"Red"}
	}
	render(){
		return(
			<h1>Hello I am a {this.props.color} </h1>
			);
	}
}

class Garage extends React.Component{
	render(){
		return (
			<div>
			<h2>Who lives in my room</h2>
			<Car />
            </div>
			);
	}
}


export default Car;