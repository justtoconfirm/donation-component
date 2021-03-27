import React, { useState } from 'react'
import Button from '../../atoms/button/Button'

const Donation = () => {

	const [ toggleState, setToggleState ] = useState(1)

	const toggleTab = (index) => {
		setToggleState(index)
	} 
	
	return (
		<div className='container'>
			<div className='bloc-tabs'>
				<button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Donate monthly</button>
				<button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Donate once</button>
			</div>
			<div className={toggleState === 1 ? "content  active-content" : "content"}>
				<p>I would like to make a monthly donation of</p>
				<Button>£12</Button>
			</div>

			<div className={toggleState === 2 ? "content  active-content" : "content"}>
				<p>I would like to make a one-off donation of</p>
				<Button>£12</Button>
			</div>
		</div>
	)
}

export default Donation