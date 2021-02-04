import * as format from './format'
const BASE_URL = 'https://sandbox.gibm.ch/'

const fetchJobOptions = (setJobOptions) =>
	fetch(BASE_URL + 'berufe.php').then(response => response.json()).then(jobs => {
		setJobOptions(jobs.map(job => ({ value: job.beruf_id, name: job.beruf_name })))
	}).catch((error) => {
		console.log(error)
	})

const fetchClassOptions = (setClassOptions, id) => {
	const param = id ? '?beruf_id=' + id : ''
	fetch(BASE_URL + 'klassen.php' + param).then(response => response.json()).then(classes => {
		setClassOptions(classes.map(schoolClass => ({ value: schoolClass.klasse_id, name: schoolClass.klasse_name })))
	}).catch((error) => {
		console.log(error)
	})
}

const fetchTable = (setTable, classId, week) => {
	let param = '?klasse_id=' + classId
	param += week ? '&woche=' + week : ''
	fetch(BASE_URL + 'tafel.php' + param).then(response => response.json()).then(table => {
		setTable(table.map(row => sortRowData(row)))
	}).catch((error) => {
		console.log(error);
	})
}

const sortRowData = (row) => ({
	id: row.tafel_id,
	date: format.date((row.tafel_datum)),
	weekday: format.weekDay(row.tafel_wochentag),
	from: format.time(row.tafel_von),
	to: format.time(row.tafel_bis),
	teacher: row.tafel_lehrer,
	subject: row.tafel_longfach,
	room: row.tafel_raum
})



export {
	fetchJobOptions,
	fetchClassOptions,
	fetchTable
}