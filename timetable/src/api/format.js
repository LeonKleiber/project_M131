const date = (dateString) => {
	const [year, month, day] = dateString.split('-')
	return day + '.' + month + '.' + year.slice(-2)
}

const weekDay = (weekday) => {
	switch (weekday) {
		case '1':
			return 'Monday'
		case '2':
			return 'Tuesday'
		case '3':
			return 'Wendnesday'
		case '4':
			return 'Thursday'
		case '5':
			return 'Friday'
		case '6':
			return 'Saturday'
		case '7':
			return 'Sunday'
		default:
			return "Invalid Weekday"
	}
}

const time = (time) => {
	const [h, min] = time.split(':')
	return h + ':' + min
}

export {
	date,
	weekDay,
	time
}