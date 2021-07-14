import { useState,useEffect } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie'
import './Dashboard.css'

function Dashboard(props){
	const cookies = new Cookies();
	const APIURL = "http://localhost:2999/dashboard/appointment";
	const authToken = cookies.get("auth-token");
	const [appointments, setAppointments] = useState(null)
	const config = {
		headers: {
			'auth-token': authToken
		}
	}
	// console.log(authToken);

	axios(APIURL,config)
		.then(result=>{
			setAppointments(result.data.appointments);
		})
		.catch(err => {
			// console.log(err);
		});
	const arr = ['kucing','12','kdasjf'];

	const makeAppointment = () => (
		<>
		  {appointments? appointments.map(elment => (
			  Appointment(elment.name,elment.description,elment.registrants)
		  )):<></>}
		</>
	  ); 
	  
	return (
		<div>
			<h1>Dashboard</h1>
			<div className="appointment-container">
				{useEffect(() => {
					console.log('test');
					return () => {
						makeAppointment()
					}
				}, [appointments]) }
				{appointments? <h1>{appointments[0].name}</h1> : <></>}
			</div>
		</div>
	);
}
function Appointment(name,description,queue){
	return(
		<div className="appointment">
			<div className="doctor-name">Nama Dokter: {name}</div>
			<div className="description">Deskripsi: {description}</div>
			<div className="queue">Antrian: {queue}</div>
		</div>
	)
}

export default Dashboard