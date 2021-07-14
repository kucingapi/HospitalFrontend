import { FormControl, Input, InputLabel, Button} from "@material-ui/core";
import Form from './Form.jsx'
import { useState } from "react";
import axios from 'axios'

function Register(props){
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [age, setAge] = useState(0);	
	const [password, setPassword] = useState("");
	const APIURL = "https://hospital-api-nodejs.herokuapp.com/auth/register";

	const usernameHandler = (event) => {
		setUsername(event.target.value);
	}

	const emailHandler = (event) => {
		setEmail(event.target.value);
	}

	const firstnameHandler = (event) => {
		setFirstname(event.target.value);
	}

	const lastnameHandler = (event) => {
		setLastname(event.target.value);
	}

	const ageHandler = (event) => {
		setAge(event.target.value);
	}

	const passwordHandler = (event) => {
		setPassword(event.target.value);
	}

	const loginHandler = async (event) => {
		const user = {
			"username": {username},
			"email": {email},
			"first_name": {firstname},
			"last_name": {lastname},
			"age": {age},
			"password": {password}
		}
		const result = await axios.post(APIURL,user);
		console.log(result);
	}
	function MakeTextField(width,label,id,type,value,func){
		return (
			<FormControl className={`${width}-width`}>
				<InputLabel>{label}</InputLabel>
				<Input
					id={`${id}`}
					value={value}
					type={type}
					onChange={func}
				/>
			</FormControl>
		)
	}

	return (
		<Form className='column'>
			<h1>Register</h1>
			<div className="text-field column half-width">
				{MakeTextField('half','Username','username','string',username,usernameHandler)}
				{MakeTextField('half','Email','email','string',email,emailHandler)}
				{MakeTextField('half','First Name','first-name','string',firstname,firstnameHandler)}
				{MakeTextField('half','Last Name','last-name','string',lastname,lastnameHandler)}
				{MakeTextField('half','Age','age','number',age,ageHandler)}
				{MakeTextField('half','Password','password','password',password,passwordHandler)}
			</div>
			<Button onClick={loginHandler}variant="contained" color="primary">Login</Button>
		</Form>
	);
}

export default Register