import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown'
import { fetchJobOptions, fetchClassOptions } from '../api/fetch'



const Menu = () => {
	const [classOptions, setClassOptions] = useState([]);
	const [jobOptions, setJobOptions] = useState([]);

	useEffect(() => {
		fetchJobOptions(setJobOptions)
		fetchClassOptions(setClassOptions)
	}, [])

	const changeJob = (event) => {
		console.log(event)
		fetchClassOptions(setClassOptions, event.target.value);
	}

	const changeClass = (event) => {

	}

	return (
		<div>
			<h1 className="mb-5">Timetable BBZBL</h1>
			<Dropdown title="Occupational Group" onChange={changeJob} options={jobOptions} />
			<Dropdown title="Class" onChange={changeClass} options={classOptions} />
		</div>

	)
}

export default Menu;