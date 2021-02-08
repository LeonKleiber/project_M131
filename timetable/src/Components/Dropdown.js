import Alert from './Alert';

const Dropdown = ({ title, options, value, onChange }) => {
	if (options.length)
		return (
			<div className='form-floating mb-5'>
				<select className='form-select' value={value} onChange={(e) => onChange(e.target.value)} id={title}>
					<option value='0' disabled>Select {title}</option>
					{options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)}
				</select>
				<label htmlFor={title} className='text-dark'>{title}</label>
			</div>
		)
	else
		return (
			<div className='mb-5'>
				<Alert text={`Couldn't load ${title}`} type='danger' />
			</div>
		)
}

export default Dropdown