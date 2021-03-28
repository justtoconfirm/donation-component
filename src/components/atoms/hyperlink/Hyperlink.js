import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './hyperlink.scss'

const Hyperlink = props => {

	const {
		href = '',
		className = '',
		theme = '',
		target,
		rel,
		children
	} = props

	const hyperlinkClass = classNames('a-link', className, {
		'a-link--primary' : theme === 'primary',
		'a-link--secondary' : theme === 'secondary'
	})

	const isExternalLink = href && (href.includes('http') || href.startsWith('mailto'))

	const renderExternalLink = () =>
		<a href={ href } {...{ target, rel }} className={ hyperlinkClass }>{ children }</a>

	const renderInternalLink = () =>
		<Link to={ href } {...{ target, rel }} className={ hyperlinkClass }>{ children }</Link>
	
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
}

export default Hyperlink