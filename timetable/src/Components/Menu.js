import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import { fetchJobOptions, fetchClassOptions } from '../api/gibm-sandbox'
import Alert from './Alert'
import { useIsMount } from '../Helper/useIsMount';



const Menu = ({ classId, setClassId }) => {
	const [classOptions, setClassOptions] = useState([])
	const [jobOptions, setJobOptions] = useState([])
	const [jobId, setJobId] = useState(parseInt(localStorage.getItem('job')) || -1)
	const isMount = useIsMount();

	// Called only on the first time
	useEffect(() => {
		// fetch Jobs

		fetchJobOptions(setJobOptions)
	}, [])

	// called when jobId is changed
	useEffect(() => {
		// checks if first Render
		if (!isMount) {
			// add JobId to LocalStorage
			localStorage.setItem('job', jobId)

			// Resets Classes
			setClassId(-1)
			setClassOptions([])
		}

		//fetch the Classes when a Job is Selected
		if (jobId !== -1) fetchClassOptions(setClassOptions, jobId)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [jobId])

	// Dropdowns with Default Options
	const JobDropDown = () => <Dropdown title='Job' value={jobId} onChange={setJobId} options={jobOptions} />
	const ClassDropDown = () => <Dropdown title='Class' value={classId} onChange={setClassId} options={classOptions} />

	// Alert if Jobs arn't Loaded
	const NoJobAlert = () => <Alert text='No Job Available' type='danger' />
	// Alert if a Job is Selected but no classes are fetched
	const NoClassAlert = () => <Alert text='No Class Available' type='danger' />

	return (
		<div>
			{/*title*/}
			<h1 className='mb-4'>Schedule BBZBL</h1>
			{/*checks if job options are loaded if this isn't the case a error is diplayed*/}
			{jobOptions.length ? JobDropDown() : NoJobAlert()}
			{/* Checks if there are classes if not checks if a job is selecteted if this is the case an Alert is displayed  */}
			{classOptions.length ? ClassDropDown() : jobId !== -1 ? NoClassAlert() : <></>}
		</div>
	)
}

export default Menu