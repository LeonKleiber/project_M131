import { fetchTable } from '../api/gibm-sandbox'
import React, { useState, useEffect } from 'react'
import Alert from './Alert'

const Table = ({ classId, week }) => {
	const [tableData, setTableData] = useState([]);
	useEffect(() => { fetchTable(setTableData, classId, week) }, [classId, week])
	return tableData.length !== 0 ? <TableContent data={tableData} /> : <Alert text='This Week is no School' type='info' />
}
const TableContent = ({ data }) => (
	<table className='table table-dark'>
		<Header />
		<tbody>
			{data.map(row => <Row subject={row} key={row['id']} />)}
		</tbody>
	</table>
)
const Header = () => (
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
	</thead>)

const Row = ({ subject }) => (
	<tr >
		<td>{subject['date']}</td>
		<td>{subject['weekday']}</td>
		<td>{subject['from']}</td>
		<td>{subject['to']}</td>
		<td>{subject['teacher']}</td>
		<td>{subject['subject']}</td>
		<td>{subject['room']}</td>
	</tr>)


export default Table