import { formatLesson } from '../Helper/format'
const BASE_URL = 'https://sandbox.gibm.ch/'

const fetchJobOptions = (setJobOptions) =>
	fetch(BASE_URL + 'berufe.php').then(response => response.json()).then(jobs => {
		setJobOptions(jobs.map(job => ({ value: job.beruf_id, label: job.beruf_name })))
	}).catch((error) => {
		console.log(error)
	})

const fetchClassOptions = (setClassOptions, id) => {
	const param = id ? '?beruf_id=' + id : ''
	fetch(BASE_URL + 'klassen.php' + param).then(response => response.json()).then(classes => {
		setClassOptions(classes.map(schoolClass => ({ value: schoolClass.klasse_id, label: schoolClass.klasse_name })))
	}).catch((error) => {
		console.log(error)
	})
}

const fetchTable = (setLessons, classId, week) => {
	let param = '?klasse_id=' + classId
	param += week ? '&woche=' + week : ''
	fetch(BASE_URL + 'tafel.php' + param).then(response => response.json()).then(lessons => {
		setLessons(lessons.map(lesson => formatLesson(lesson)))
	}).catch((error) => {
		console.log(error);
	})
}



export {
	fetchJobOptions,
	fetchClassOptions,
	fetchTable
}