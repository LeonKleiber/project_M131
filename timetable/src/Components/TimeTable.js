import Alert from "./Alert";

const TimeTable = () => {
	const content = [{ id: "231093294057968784785", date: "20.01.2021", weekday: "Mo", from: "08:00", to: "16:15", teacher: "D. Brotbeck", subject: "French", room: "206" }];
	return (
		content ? <Schedule content={content} /> : <Alert text="Please Choose a Class to display the Schedule" type="warning" />
	)
}

const Schedule = ({ content }) => {
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
				{content.map((row) => (
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