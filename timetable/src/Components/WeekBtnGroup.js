import getWeek from '../Helper/getWeek'

const WeekBtnGroup = ({ date, setDate }) => {

	// Adds x weeks to the Date
	const changeWeek = (weeks) => new Date(date.getTime() + weeks * 7 * 24 * 60 * 60 * 1000)

	return (
		<div className='btn-group mb-4'>
			{/* Adds -1 week to date on Click*/}
			<button className='btn btn-secondary' onClick={() => { setDate(changeWeek(-1)) }}>&laquo;</button>
			{/* Returns to Today on Click */}
			<button className='btn btn-secondary' onClick={() => { setDate(new Date()) }}>{getWeek(date)}</button>
			{/* Adds 1 week to date Click*/}
			<button className='btn btn-secondary' onClick={() => { setDate(changeWeek(1)) }}>&raquo;</button>
		</div>)
}

export default WeekBtnGroup