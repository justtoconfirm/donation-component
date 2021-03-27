import React from 'react'
import PropTypes from 'prop-types'

import './input.scss'

const Input = props => {

	const {
		type = 'text',
		className = 'a-input',
		id,
		name,
		value,
		size,
		maxLength,
		min,
		max,
		placeholder,
		onChange,
		readOnly = false,
		disabled = false
	} = props
	
	return (
		<input {...{ type, onChange, className, id, name, value, size, maxLength, min, max, placeholder, readOnly, disabled }} />
	)
}

Input.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	size: PropTypes.string,
	maxLength: PropTypes.string,
	min: PropTypes.string,
	max: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	readOnly: PropTypes.bool,
	disabled: PropTypes.bool
}

export default Input