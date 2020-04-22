import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Car from './App2';
import {Fragment} from 'react';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function Car(){
// 	return <h2>This is Car function</h2>
// }

// var Car = function(){
// 	return <h3>This is Car Variable function</h3>
// }

// let Car = () => {
// 	return <h1>This is Car let bracket function </h1>
// }

// class Header extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {favcolor : "Red"};
// 	}
// 	static getDerivedStateFromProps(props, state){
// 		return {favcolor : props.fun};
// 	}
// 	changeColor = ()=>{
// 		this.setState({'favcolor':"blue"});
// 	}
// 	render(){
// 		return(
// 			<div>
// 			  <h2>My fav Color is {this.state.favcolor} and this is {this.props.fun} </h2>
// 			  <button type="button" onClick={this.changeColor}>Change FavColor </button>
// 			 </div>
// 			);
// 	}
// }


// function fullname(user){
// 	if(user){
// 	return user.fname + ' ' +user.lname;		
// 	}
// 	else{
// 		return <h2>Hell0 Stranger </h2>
// 	}
// }

// const user = {
// 	fname : "Souvik",
// 	lname : "Biswas"
// }

// const element = (
// 	<h3>
// 	Hell0 {fullname()}
//      </h3>
// 	);


// Function clock
// function tick(){
// 	var element = (
// 		<div>
// 		   <h1>The Current Time is {new Date().toLocaleTimeString()}</h1>
// 		</div>
// 		);
// ReactDOM.render(element,document.getElementById('root'))
// }

// setInterval(tick,1000);




// Functio Comment

// function Comment(props){
// 	return(
// 		<div className ="Comment">
// 		     <div className="UserInfo">
// 		         <img className="Avatar" src={props.author.url} alt={props.author.name} />

// 		         <div className="Username">
// 		         {props.author.name}
// 		         </div>

// 		         <div className="Comment">
// 		         {props.text}
// 		         </div>

// 		         <div className="date">
//                     {formatDate(props.date)}
//                  </div>


// 		     </div>

// 		</div>
// 		);
// }

// var props = {
// 	author :{
// 		url:"https://www.milligramit.com/wp-content/uploads/2020/01/David.jpg",
// 		nmae : "Demo Name",
// 	},
// 	text: "This is Dummy test",
// 	date: new Date()

// };

// function formatDate(date){
// 	return date.toLocaleDateString();
// }

// var element = <Comment props="props" />

// ReactDOM.render(<Comment date={props.date} text={props.text} author ={props.author} />,document.getElementById('root'));



// class Demo extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state ={
// 			color:"Red",
// 			age : 21
// 		};	
// 	}
	// static getDerivedStateFromProps(props, state){
	// 	return {color:props.fav};
	// }
	// changeColor=()=>{
	// 	this.setState({color:"Blue",age:100});
	// }
//    shouldComponentUpdate(){
//    	return true;
//    }

// 	componentDidMount(){
// 		setTimeout( ()=>{
// 			this.setState({color:"----------"})
// 		},1000);
// 	}
// 		render(){
// 			return(
// 				<div>
// 				<h2>My age is = {this.state.age} and Fav Color is {this.state.color}</h2>
// 				<button onClick={this.changeColor}>Change Color</button>
// 				</div>
// 				);
// 		}
	
// }

// ReactDOM.render(<Demo fav="demo color" />, document.getElementById('root'));
// class MyForm extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state={
// 			username:'',
// 			age:'',
// 			err:'',
// 			description:'this is demo description'
// 		};
// 	}
// 	mySubmitHandler=(event)=>{
//      event.preventDefault();
// 	}
// 	myChangeHandler=(event)=>{
// 		let nam = event.target.name;
// 		let val = event.target.value;
// 		this.setState({[nam]:val});
// 		if(nam === "age"){
//           if(val !='' && !Number(val)){
//           var err = <strong>You age must be a number</strong>;
//           }
// 		}
// 		this.setState({err:err});
// 	}
// 	render(){
// 		return(
// 			<form onSubmit={this.mySubmitHandler}>
// 			  <h3>Hello {this.state.username} and your age is {this.state.age}</h3>
// 			  <input type="text" name="username"  onChange={this.myChangeHandler} />
// 			  <input type="text" name="age" onChange={this.myChangeHandler} />
// 			  <textarea value={this.state.description} />
// 			  <input type="submit" />
// 			  {this.state.err}
// 			 </form>
// 			);
// 	}
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));


// class MyForm extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state={
// 			car:"volve"
// 		};
// 	}
// 	render(){
// 		return(
//               <select value={this.state.car}>
//                     <option value="ford" >Ford</option>
//                     <option value="volve" >Volvo</option>
//                     <option value="fiat">Fiat</option>
//                </select> 
// 			);
// 	}
// }
// ReactDOM.render(<MyForm />, document.getElementById('root'));


// class MyHeader extends React.Component{
// 	render(){
// 		var myStyle={
//         fontSize:30,
//         color:"blue",
//         backgroundColor:"lightblue"
// 		};
// 		return(
//            <div>
//            	 	<h2 style={myStyle}>Hello style</h2>
//            </div>
// 			);
// 	}
// }

// ReactDOM.render(<MyHeader />, document.getElementById('root'));

// class Clock extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {date: new Date()};
// 	}

// 	componentDidMount(){
//      this.timeID= setInterval(()=>this.tick(),1000);
// 	}

// 	componentWillUnmount(){
// 		alert("dfdsf");
//      clearInterval(this.timeID);
// 	}
// 	tick(){
// 		this.setState({date:new Date()});
// 	}
// 	render(){
// 		return(
// 			<div>
// 			   <h3>The Current Time is {this.state.date.toLocaleTimeString()}</h3>
//              </div>
// 			);
// 	}
// }

// 	ReactDOM.render(<Clock />, document.getElementById('root'));


// class Toggle extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {isToggleOn:true};
// 	}

// 	handleClick(){
		
// 	}

// 	render(){
// 		return(
//               <button onClick={this.handleClick}>{this.state.isToggleOn?'ON':'OFF'}</button>
// 			);
// 	}
// }


// ReactDOM.render(<Toggle />, document.getElementById('root'));

// function GuestGreeting(props){
// 	return <h2> Please Sign In </h2>;
// }
// function UserGreeting(props){
// 	return <h2>Thank YOu  for using </h2>;
// }

// function Greeting(props){
// 	const isLoggedIn = props.isLoggedIn;
// 	if(isLoggedIn){
// 		return <UserGreeting />;
// 	}
// 	else{
// 		return <GuestGreeting />;
// 	}
// }


// class LoginControl extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.handleLoginClick = this.handleLoginClick.bind(this);
// 		this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 		this.state={isLoggedIn:false};
// 	}
// 	handleLoginClick(){
// 		this.setState({isLoggedIn:true});
// 	}
// 	handleLogoutClick(){
// 		this.setState({isLoggedIn:false});
// 	}
// 	render(){
// 		const isLoggedIn= this.state.isLoggedIn;
// 		let button;
// 		if(isLoggedIn){
// 			button =<
// 		}
// 	}
// }
// ReactDOM.render(<Greeting isLoggedIn={true} />, document.getElementById('root'));



// function Mailbox(props){
// 	const unreadMessages = props.unreadMessages;
// 	return(
// 		<div>
// 			<h1>Hello </h1>
// 			{unreadMessages.length> 0 &&
// 				<h3>You have {unreadMessages.length} unread Messages </h3>
// 			}
// 		</div>

// 		);
// }
// const messages = ['React','Re:Reacg',"texting"];
// ReactDOM.render(<Mailbox unreadMessages={messages} />,document.getElementById('root'));
// function ListItems(props){
// 	return <li>{props.value}</li>;
// }
// function NumberList(props){
// 	const numbers = props.numbers;
// 	const listItems = numbers.map((number)=>
// 		<ListItems key={number.toString()} value={number} />
// 	);
// 	return(
//           <ul>{listItems}</ul>
// 		);
// }

// const numbers = [1,2,3,4,5,6,7]; 

// ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root'));



// function Blog(props){
// 	const sidebar = (
//                     <ul>
//                     	{props.posts.map((post)=>
//                         <li key={post.id}>{post.title}</li> 
//                     	)}
//                     </ul>
// 		           );
// 	const content = props.posts.map((post)=>
// 		             <div key={post.id}>
// 		             <h3>{post.title}</h3>
// 		             <p>{post.content}</p>
// 		             </div>
// 		            );
// 	return(
// 		<div>
// 			{sidebar}
// 			<hr />
// 			{content}
// 		</div>
// 		);
// }

// const posts=[
// 	{id:1, title:"Hello World", content:"Welcome to Learning React"},
// 	{id:2, title: "Installation", content:" You can download React From Npm"}
// ];

// ReactDOM.render(<Blog  posts={posts} />, document.getElementById('root'));



// class NameForm extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state={
// 			name:"",
// 			essay:""
// 		};
// 		// this.handleChange= this.handleChange.bind(this);
// 		// this.handleSubmit= this.handleSubmit.bind(this);
// 	}
// 	handleChange=(event)=>{
// 		let nam = event.target.name;
// 		let val =  event.target.value;
// 		this.setState({[nam] : val});
// 	}
// 	handleSubmit=(event)=>{
// 		event.preventDefault();
// 		alert("Form "+this.state.name+" is prevented");
// 	}

// 	render(){
// 		return(
//                 <form onSubmit={this.handleSubmit}>
//                 <h4>Name : {this.state.name}</h4>
//                 <h4>Essay : {this.state.essay}</h4>
//                 	<label>
//                 		Name : <input type="text" onChange={this.handleChange} value={this.state.name} name="name" />
//                 	</label>

//                 	<label>
//                 		Essay : <textarea value={this.state.essay} onChange={this.handleChange} name="essay" />
//                 	</label>
//                 	<input type="submit" />
//                 </form>
// 			);
// 	}

// }

// ReactDOM.render(<NameForm />,document.getElementById('root'));




//  var BoilingVerdict=(props)=>{
// 	if(props.celsius >= 100){
// 		return <p>Water would boil</p>;
// 	}
//     return <p>Water Would not boil</p>;
// }

// class Calculator extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state={
//          temp: ''
// 		};
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	handleChange(event){
// 		this.setState({temp:event.target.value})
// 	}
     
//     render(){
//     	const temp = this.state.temp;
//     	return(
//     		<div>
//     			<p>Enter the temp in celsius</p>
//     			<input  value={temp} onChange={this.handleChange}/>
//     			<BoilingVerdict celsius={parseFloat(temp)} />
//     		</div>
//     		);
//     }
// }

// ReactDOM.render(<Calculator />,document.getElementById('root'));

// function FancyBorder(props){
// 	return(
// 		<div className={'FancyBorder FancyBorder'+props.color}>
// 			{props.children}
// 		</div>
// 		);
// }

// function WelcomeDialog(){
// 	return(
// 		<FancyBorder color="blue"  children="This is children">
//            <h1>Welcome</h1>
//            <p>Thankk You for IV</p>
// 		</FancyBorder>
// 		);
// }

// ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));


class CustomTextInput extends React.Component{
	constructor(props){
		super(props);
		this.textInput = React.createRef();
	}
    
    focus(){
    	this.textInput.current.focus();
    }
	render(){
		return(
			<input type="text" ref={this.textInput} />
			);
	}
}

ReactDOM.render(<CustomTextInput />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
