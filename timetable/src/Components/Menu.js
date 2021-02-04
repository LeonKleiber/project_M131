import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown'
import { fetchJobOptions, fetchClassOptions } from '../api/gibm-sandbox'



const Menu = ({ classId, setClassId }) => {
	const [classOptions, setClassOptions] = useState([]);
	const [jobOptions, setJobOptions] = useState([]);
	const [jobId, setJobId] = useState(getCookie('job'));

	useEffect(() => {
		fetchJobOptions(setJobOptions)
		fetchClassOptions(setClassOptions)
	}, [])

	return (
		<div>
			<h1 className="mb-5">Schedule BBZBL</h1>
			<Dropdown title="Occupational Group" value={jobId} onChange={(value) => {
				setJobId(value)
				localStorage.setItem('job', value)
				fetchClassOptions(setClassOptions, value)
				setClassId('0')
			}} options={jobOptions} />
			<Dropdown title="Class" value={classId} onChange={setClassId} options={classOptions} />
		</div>

	)
}

const getCookie = cookie => localStorage.getItem(cookie) || '0'


export default Menu;