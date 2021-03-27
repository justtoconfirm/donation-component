import React from 'react'
import PropTypes from 'prop-types'

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
		readOnly = false,
		disabled = false
	} = props
	
	return (
		<input {...{ type, className, id, name, value, size, maxLength, min, max, placeholder, readOnly, disabled }} />
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
	readOnly: PropTypes.bool,
	disabled: PropTypes.bool
}

export default Input