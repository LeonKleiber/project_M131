import { fetchTable } from '../api/gibm-sandbox'
import React, { useState, useEffect } from 'react'

const Table = ({ classId, week }) => {
	const [tableContent, setTableContent] = useState([]);
	useEffect(() => { fetchTable(setTableContent, classId, week) }, [classId, week])
	return (
		<table className="table table-dark">
			<thead>
				<tr>
					<th>Date</th>
					<th>Weekday</th>
					<th>From</th>
					<th>To</th>
					<th>Teacher</th>
					<th>Subject</th>
					<th>Room</th>
				</tr>
			</thead>
			<tbody>
				{tableContent.map(row => <Row subject={row} key={row["id"]} />)}
			</tbody>
		</table>
	)
}

const Row = ({ subject }) => (
	<tr >
		<td>{subject["date"]}</td>
		<td>{subject["weekday"]}</td>
		<td>{subject["from"]}</td>
		<td>{subject["to"]}</td>
		<td>{subject["teacher"]}</td>
		<td>{subject["subject"]}</td>
		<td>{subject["room"]}</td>
	</tr>)


export default Table