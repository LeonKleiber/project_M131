import React, { useState, useEffect } from 'react';
import { fetchTable } from '../api/fetch'
import Alert from "./Alert";

const TimeTable = () => {
	const classId = 3168196
	return (
		classId ? <Schedule classId={classId} week={''} /> : <Alert text="Please Choose a Class to display the Schedule" type="warning" />
	)
}

const Schedule = ({ classId, week }) => {
	const [tableContent, setTableContent] = useState([]);
	useEffect(() => { fetchTable(setTableContent, classId, week) }, [])
	return (
		<table className="table table-dark ">
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
				{tableContent.map((row) => (
					<tr key={row["id"]}>
						<td>{row["date"]}</td>
						<td>{row["weekday"]}</td>
						<td>{row["from"]}</td>
						<td>{row["to"]}</td>
						<td>{row["teacher"]}</td>
						<td>{row["subject"]}</td>
						<td>{row["room"]}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default TimeTable;