import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = props => {

	const {
		type = 'button',
		url = '',
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

	const isLink = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'))

	const renderLink = () =>
		<a href={url} role='button' className={ buttonClass }>{ children }</a>

	const renderButton = () =>
		<button {...{ type, onClick }} className={ buttonClass }>{ children }</button>

	return (
		isLink ? renderLink() : renderButton()
	)
}

Button.propTypes = {
	type: PropTypes.string,
	url: PropTypes.string,
	className: PropTypes.string,
	theme: PropTypes.string,
	hasDropShadow: PropTypes.bool,
	children: PropTypes.string,
	onClick: PropTypes.func
}

export default Button