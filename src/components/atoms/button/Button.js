import React from 'react'

const Button = props => {

	const {
		type = 'button',
		children,
		onClick
	} = props

	return (
		<button {...{ type, onClick }}>{ children }</button>
	)
}

export default Button