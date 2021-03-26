import React from 'react'

const Button = props => {

	const {
		type = 'button',
		children
	} = props

	return (
		<button {...{ type }}>{ children }</button>
	)
}

export default Button