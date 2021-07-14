import { FormControl, Input, InputLabel, Button} from "@material-ui/core";
import Form from './Form.jsx'
import { useState } from "react";
import axios from 'axios'
import './Login.css';

function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// const APIURL = "https://hospital-api-nodejs.herokuapp.com/";
	const APIURL = "http://localhost:2999/";

	const usernameHandler = (event) => {
		setUsername(event.target.value);
	}

	const passwordHandler = (event) => {
		setPassword(event.target.value);
	}

	const loginHandler = async (event) => {
		const user = {
			"username": `${username}`,
			"password": `${password}`
		}
		username = "";
		password = "";
		const result = await axios.post(APIURL+"auth/login/",user);
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
			<h1>Login</h1>
			<div className="text-field column half-width">
				{MakeTextField('half','Username','username','string',username,usernameHandler)}
				{MakeTextField('half','Password','password','password',password,passwordHandler)}
			</div>
			<Button onClick={loginHandler}variant="contained" color="primary">Login</Button>
		</Form>
	);
}

export default Login;