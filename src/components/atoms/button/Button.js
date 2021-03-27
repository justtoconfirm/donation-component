import React from 'react'
import classNames from 'classnames'

const Button = props => {

	const {
		type = 'button',
		className = '',
		theme = '',
		hasDropShadow = false,
		children,
		onClick
	} = props

	const buttonClass = classNames('a-btn', className, {
		'a-btn--primary' : theme === 'primary',
		'a-btn--secondary' : theme === 'secondary',
		'a-btn--shadow' : hasDropShadow
	})

	return (
		<button {...{ type, onClick }} className={ buttonClass }>{ children }</button>
	)
}

export default Button