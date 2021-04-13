import Select from 'react-select';


const Dropdown = ({ title, options, value, onChange }) => {
	options.sort()
	return (
		<div className='form-floating mb-4 '>
			{/* Label for the Dropdown */}
			<div className='h6 p-1 text-start text-light'>{title}</div>
			{/* Select with react-select Libary (Clearable and Searchable)*/}
			<Select
				id={title}
				className='text-dark'
				defaultValue={options.find(option => parseInt(option.value) === value)}
				isClearable='true'
				options={options}
				onChange={(input) => {
					//on value change executes onChange function with value oder -1
					onChange(input ? input.value : -1)
				}}
			/>
		</div>
	)
}

export default Dropdown