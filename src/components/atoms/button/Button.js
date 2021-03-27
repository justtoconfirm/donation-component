import React from 'react'
import PropTypes from 'prop-types'
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

Button.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	theme: PropTypes.string,
	hasDropShadow: PropTypes.bool,
	children: PropTypes.string,
	onClick: PropTypes.func
}

export default Button