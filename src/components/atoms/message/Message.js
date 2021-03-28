import React from 'react'
import PropTypes from 'prop-types'

import './message.scss'

const Message = props => {

	const {
		className = 'a-message',
		children
	} = props
	
	return (
		<>
			<div className='a-message-container'>
				<div className='a-message-arrow'></div>
				<div {...{ className }}>{ children }</div>
			</div>
		</>
	)
}

Message.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string
}

export default Message