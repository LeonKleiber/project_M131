const formatLesson = (row) => ({
	id: row.tafel_id,
	date: date(row.tafel_wochentag, row.tafel_datum),
	time: time(row.tafel_von, row.tafel_bis),
	teacher: row.tafel_lehrer ? row.tafel_lehrer : '-',
	subject: row.tafel_longfach ? row.tafel_longfach : '-',
	room: row.tafel_raum ? row.tafel_raum : '-'
})


const date = (weekNum, dateString) => {
	const [, monthNum, day] = dateString.split('-')
	const weekDayString = weekDay(weekNum)
	const monthString = month(monthNum)
	return weekDayString && monthString ? `${weekDay(weekNum)} ${day} ${month(monthNum)}` : '-'
}
const weekDay = (weekNum) => {
	switch (weekNum) {
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
			return 0
	}
}

const month = (monthNum) => {
	switch (monthNum) {
		case '01':
			return 'Jan'
		case '02':
			return 'Feb'
		case '03':
			return 'Mar'
		case '04':
			return 'Apr'
		case '05':
			return 'May'
		case '06':
			return 'Jun'
		case '07':
			return 'Jul'
		case '08':
			return 'Aug'
		case '09':
			return 'Sep'
		case '10':
			return 'Oct'
		case '11':
			return 'Nev'
		case '12':
			return 'Dec'
		default:
			return 0
	}
}

const time = (from, to) => `${splitTime(from)} - ${splitTime(to)}`

const splitTime = (time) => {
	const [h, min] = time.split(':')
	return h + ':' + min
}

export {
	date,
	weekDay,
	time
}

export { formatLesson }