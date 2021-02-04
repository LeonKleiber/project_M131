const BASE_URL = 'https://sandbox.gibm.ch/';

const fetchJobOptions = (setJobOptions) =>
	fetch(BASE_URL + 'berufe.php').then(response => response.json()).then(jobs => {
		setJobOptions(jobs.map(job => ({ value: job.beruf_id, name: job.beruf_name })))
	}).catch((error) => {
		console.log(error);
	})

const fetchClassOptions = (setClassOptions, id) => {
	const param = id ? '?beruf_id=' + id : ''
	fetch(BASE_URL + '/klassen.php' + param).then(response => response.json()).then(classes => {
		setClassOptions(classes.map(schoolClass => ({ value: schoolClass.klasse_id, name: schoolClass.klasse_name })))
	}).catch((error) => {
		console.log(error);
	})
}

const fetchTable = (setTable, classId, week) => {
	let param = '?klasse_id=' + classId
	param += week ? '&woche=' + week : ''
	fetch(BASE_URL + '/tafel.php' + param).then(response => response.json()).then(table => {
		setTable(table.map(row => ({ id: row.tafel_id, date: row.tafel_datum, weekday: getWeekDay(row.tafel_wochentag), from: row.tafel_von, to: row.tafel_bis, teacher: row.tafel_lehrer, subject: row.tafel_longfach, room: row.tafel_raum })))
	}).catch((error) => {
		console.log(error);
	})
}

const getWeekDay = (weekday) => {
	switch (weekday) {
		case '1':
			return 'Mon'
		case '2':
			return 'Tue'
		case '3':
			return 'Wen'
		case '4':
			return 'Thu'
		case '5':
			return 'Fri'
		case '6':
			return 'Sat'
		case '7':
			return 'Sun'
		default:
			return "Invalid Weekday"
	}
}

export {
	fetchJobOptions,
	fetchClassOptions,
	fetchTable
}