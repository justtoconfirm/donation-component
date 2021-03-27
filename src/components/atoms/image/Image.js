import React from 'react'
import PropTypes from 'prop-types'

import './image.scss'

const Image = props => {

	const {
		src = '',
		className = 'a-img',
		width,
		height,
		alt = '',
		loading
	} = props
	
	return (
		<img {...{ src, className, width, height, alt, loading }} />
	)
}

Image.propTypes = {
	src: PropTypes.string,
	className: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	alt: PropTypes.string,
	loading: PropTypes.string
}

export default Image