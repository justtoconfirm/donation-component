import React, { useState } from 'react'
import Button from '../../atoms/button/Button'
import Input from '../../atoms/input/Input'
import Hyperlink from '../../atoms/hyperlink/Hyperlink'
import Image from '../../atoms/image/Image'

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
			<div className={toggleState === 1 ? "content active-content" : "content"}>
				<p>I would like to make a monthly donation of</p>
				<Button>£10</Button>
				<Button>£40</Button>
				<Button>£75</Button>
				<Button>£100</Button>
				<Input />
				<Button>Donate £0 today</Button>
			</div>

			<div className={toggleState === 2 ? "content active-content" : "content"}>
				<p>I would like to make a one-off donation of</p>
				<Button>£10</Button>
				<Button>£40</Button>
				<Button>£75</Button>
				<Button>£100</Button>
				<Input />
				<Button>Donate £0 today</Button>
			</div>

			<div class='container-footer'>
				<Hyperlink>Link</Hyperlink>

				<Image src='image1.jpg' height='20' width='20' alt='test alt text' loading='lazy' />
			</div>
		</div>
	)
}

export default Donation