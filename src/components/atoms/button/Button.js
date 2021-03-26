import React from 'react'

const Button = props => {

	const {
		type = 'button',
		className = '',
		children,
		onClick
	} = props

	return (
		<button {...{ type, className, onClick }}>{ children }</button>
	)
}

export default Button