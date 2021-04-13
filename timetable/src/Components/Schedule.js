import React, { useState } from 'react'

import Lessons from './Lessons'
import WeekBtnGroup from './WeekBtnGroup'
import getWeek from '../Helper/getWeek'

// displays Schedule if the classId isn't -1
const Schedule = ({ classId }) => classId !== -1 ? <Content classId={classId} /> : <></>

const Content = ({ classId }) => {
	// State Object for the Date
	const [date, setDate] = useState(new Date())
	return (
		<div>
			{/* Btn Group to change and disply the week */}
			<WeekBtnGroup date={date} setDate={setDate} />
			{/* The Table */}
			<Lessons classId={classId} week={getWeek(date)} />
		</div>
	)
}

export default Schedule