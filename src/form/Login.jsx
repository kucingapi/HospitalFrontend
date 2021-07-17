import { FormControl, Input, InputLabel, Button} from "@material-ui/core";
import Form from './Form.jsx'
import { useState } from "react";
import axios from 'axios'
import './Login.css';
import Cookies from 'universal-cookie'

function Login(props) {
	const cookies = new Cookies();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// const APIURL = "https://hospital-api-nodejs.herokuapp.com/auth/login";
	const APIURL = "http://localhost:2999/auth/login";

	const usernameHandler = (event) => {
		setUsername(event.target.value);
	}

	const passwordHandler = (event) => {
		setPassword(event.target.value);
	}

	const loginHandler = async (event) => {
		console.log('test');
		console.log(cookies);
		const user = {
			"username": `${username}`,
			"password": `${password}`
		}
		setUsername("");
		setPassword("");
		const result = await axios.post(APIURL,user)
		.catch((err) => {
			alert('error to the api')
		});
		
		cookies.set('auth-token',result.data.token,{path:'/'});
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