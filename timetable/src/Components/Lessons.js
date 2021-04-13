import { fetchTable } from '../api/gibm-sandbox'
import React, { useState, useEffect } from 'react'
import Alert from './Alert'

const Lessons = ({ classId, week }) => {
	//Stae object for the lessons
	const [lessons, setLessons] = useState([]);
	// fetch Table data if either classId or week is changed
	useEffect(() => fetchTable(setLessons, classId, week), [classId, week])

	//Alert if No Lesson is found
	const NoSchoolInfo = () => <Alert text='This Week is no School' type='info' />
	//The Acual Table
	const Content = () => <TableContent lessons={lessons} />

	// Returns Table or Alert depending on if the data is resived
	return <>{lessons.length !== 0 ? Content() : NoSchoolInfo()}</>
}

const TableContent = ({ lessons }) => {
	return (
		<div className='table-responsive'>
			<table className='table table-dark'>
				<Header />
				<tbody>
					{/* Maps all Lessons in Rows. The key is for Uniquness*/}
					{lessons.map((lesson) => <Row l={lesson} key={lesson.id} />)}
				</tbody>
			</table>
		</div>
	)
}

// Table Head
const Header = () => <thead><tr><th>Date</th><th>Time</th><th>Teacher</th><th>Subject</th><th>Room</th></tr></thead>
// Table Body
const Row = ({ l }) => <tr><td>{l.date}</td><td>{l.time}</td><td>{l.teacher}</td><td>{l.subject}</td><td>{l.room}</td></tr>

export default Lessons