import React from 'react'
import classNames from 'classnames'

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