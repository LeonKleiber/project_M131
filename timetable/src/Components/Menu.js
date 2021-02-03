import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown'
import axios from 'axios';



const Menu = () => {

	const fetchJobOptions = () =>
		axios.get('https://sandbox.gibm.ch/berufe.php').then(jobs => {
			setJobOptions(jobs.data.map(job => ({ value: job.beruf_id, name: job.beruf_name })))
		}).catch((error) => {
			console.log(error);
		})

	const fetchClassOptions = (id) => {
		const param = id ? '?beruf_id=' + id : ''
		axios.get('https://sandbox.gibm.ch/klassen.php' + param).then(classes => {
			setClassOptions(classes.data.map(schoolClass => ({ value: schoolClass.klasse_id, name: schoolClass.klasse_name })))
		}).catch((error) => {
			console.log(error);
		})
	}

	const changeJob = (event) => {
		console.log("hi")
		fetchClassOptions(event.target.value);
	}

	const [classOptions, setClassOptions] = useState([]);
	const [jobOptions, setJobOptions] = useState([]);
	useEffect(() => {
		fetchJobOptions()
		fetchClassOptions()
	}, [])

	return (
		<div>
			<h1 className="mb-5">Timetable BBZBL</h1>
			<Dropdown title="Occupational Group" onChange={changeJob} options={jobOptions} />
			<Dropdown title="Class" onChange={changeClass} options={classOptions} />
		</div>

	)
}



const changeClass = (event) => {

}





export default Menu;