import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Hyperlink = props => {

	const {
		href = '',
		className = '',
		theme = '',
		target,
		rel,
		children,
		onClick
	} = props

	const hyperlinkClass = classNames('a-link', className, {
		'a-link--primary' : theme === 'primary',
		'a-link--secondary' : theme === 'secondary'
	})

	const isExternalLink = href && (href.includes('http') || href.startsWith('mailto'))

	const renderExternalLink = () =>
		<a href={ href } {...{ target, rel, onClick }} className={ hyperlinkClass }>{ children }</a>

	const renderInternalLink = () =>
		<Link to={ href } {...{ target, rel, onClick }} className={ hyperlinkClass }>{ children }</Link>
	
	return (
		isExternalLink ? renderExternalLink() : renderInternalLink()
	)
}

Hyperlink.propTypes = {
	href: PropTypes.string,
	className: PropTypes.string,
	theme: PropTypes.string,
	target: PropTypes.string,
	rel: PropTypes.string,
	children: PropTypes.string,
	onClick: PropTypes.func
}

export default Hyperlink