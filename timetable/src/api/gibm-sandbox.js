import { formatLesson } from '../Helper/format'
// The Base Of the API URL
const BASE_URL = 'https://sandbox.gibm.ch/'

const fetchJobOptions = (setJobOptions) =>
	// fetch the data form tafel.php
	fetch(BASE_URL + 'berufe.php').then(response => response.json()).then(jobs => {
		// use callback function to set the Array for the Job options
		setJobOptions(jobs.map(job => ({ value: job.beruf_id, label: job.beruf_name })))
	}).catch((error) => {
		// Log the Eveltual Error to the Console
		console.log(error)
	})

const fetchClassOptions = (setClassOptions, id) => {
	// create the String for the URL Parmeters
	const param = id ? '?beruf_id=' + id : ''
	// fetch the data form tafel.php
	fetch(BASE_URL + 'klassen.php' + param).then(response => response.json()).then(classes => {
		// use callback function to set the Array for the Class options
		setClassOptions(classes.map(schoolClass => ({ value: schoolClass.klasse_id, label: schoolClass.klasse_name })))
	}).catch((error) => {
		// Log the Eveltual Error to the Console
		console.log(error)
	})
}

const fetchTable = (setLessons, classId, week) => {
	// create the String for the URL Parmeters
	let param = '?klasse_id=' + classId + '&woche=' + week
	// fetch the data form tafel.php
	fetch(BASE_URL + 'tafel.php' + param).then(response => response.json()).then(lessons => {
		// use callback function to set the Array for the Lessons
		setLessons(lessons.map(lesson => formatLesson(lesson)))
	}).catch((error) => {
		// Log the Eveltual Error to the Console
		console.log(error)
	})
}

export {
	fetchJobOptions,
	fetchClassOptions,
	fetchTable
}