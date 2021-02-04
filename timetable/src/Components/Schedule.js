import React, { useState } from 'react'

import Alert from './Alert'
import Table from './Table'

const WEEK_IN_MILSECS = 7 * 24 * 60 * 60 * 1000;

const Schedule = ({ classId }) => classId !== '0' ? <Content classId={classId} /> : <Alert text="Please Choose a Class to display the Schedule" type="warning" />

const Content = ({ classId }) => {
	const [date, setDate] = useState(new Date())
	return (

		<div><div className="btn-group">
			<button className="btn btn-secondary" onClick={() => { setDate(changeWeek(date, -1)) }}>&lt;&lt;</button>
			<button className="btn btn-secondary" onClick={() => { setDate(new Date()) }}>{getWeek(date)}</button>
			<button className="btn btn-secondary" onClick={() => { setDate(changeWeek(date, 1)) }}>&gt;&gt;</button>
		</div><Table classId={classId} week={getWeek(date)} /></div>
	)
}

const changeWeek = (date, weeks) => new Date(date.getTime() + weeks * WEEK_IN_MILSECS)


const getWeek = (date) => {
	let d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
	d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
	var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
	return ('0' + Math.ceil((((d - yearStart) / 86400000) + 1) / 7)).slice(-2) + '-' + d.getUTCFullYear()
}

export default Schedule