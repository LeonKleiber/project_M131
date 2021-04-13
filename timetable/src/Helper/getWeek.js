// Returns the week in the format dd-yyyy
const getWeek = (date) => {
	// copied Code Source: 1st Answer https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
	let d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
	d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
	let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
	// shortend the copied version and returned in format that I need
	return ('0' + Math.ceil((((d - yearStart) / 86400000) + 1) / 7)).slice(-2) + '-' + d.getUTCFullYear()
}

export default getWeek