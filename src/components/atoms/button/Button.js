import React from 'react'

const Button = props => {

	const {
		type = 'button'
	} = props

	return (
		<button {...{ type }}>Button</button>
	)
}

export default Button