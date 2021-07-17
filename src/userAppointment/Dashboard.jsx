import { useState,useEffect } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
import './Dashboard.css';
import {Button} from '@material-ui/core';

function Dashboard(props){
	const cookies = new Cookies();
	const APIURL = "http://localhost:2999/dashboard/appointment";
	const authToken = cookies.get("auth-token");
	const [appointments, setAppointments] = useState([])
	const config = {
		headers: {
			'auth-token': authToken
		}
	}
	
	useEffect(()=>{
		axios(APIURL,config)
			.then(result=>{
				console.log(result);
				setAppointments(result.data.appointments);
				
			})
			.catch(err => {
				// console.log(err);
			});
	},[])


	function Appointment(appointment){
		const {name, description, registrants}= appointment;
		let queue = "";

		registrants.forEach((item,index)=>{
			queue += item 
			if(index < registrants.length-1)
				queue += ','
		})

		const buttonHandler = async (id) => {
			const result = await axios(APIURL+`/${id}`,config).catch(
				alert('you dont have premission')
			);
			setAppointments(appointments.filter(element => {
				console.log(element._id != id);
				return element._id != id;
			}))
		}

		return(
			<div key={appointment._id} className="appointment">
				<h2 className="doctor-name">{name}</h2>
				<article className="description">{description}</article>
				<h3>Queue:</h3>
				{queue}
				<div className='button-container'>
					<Button onClick={()=>{buttonHandler(appointment._id)}} variant="contained" color="secondary">Cancel</Button>
				</div>
			</div>
		)
	}

	return (
		<div key="dashboard">
			<h1>Appointments</h1>
			<div className="appointment-container">
			{appointments.map(appointment => (
				Appointment(appointment)
			))}
			</div>
		</div>
	);
}

export default Dashboard