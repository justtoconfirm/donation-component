import React, { useState } from 'react'
import Button from '../../atoms/button/Button'
import Input from '../../atoms/input/Input'
import Message from '../../atoms/message/Message'
import Hyperlink from '../../atoms/hyperlink/Hyperlink'
import Image from '../../atoms/image/Image'

const Donation = () => {

	const [ toggleState, setToggleState ] = useState(1)
	const [ donationAmount, setDonationAmount ] = useState(0)

	const toggleTab = index => {
		setToggleState(index)
	}

	const setDonation = amount => {
		setDonationAmount(amount)
	} 
	
	return (
		<div className='container'>
			<div className='bloc-tabs'>
				<button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Donate monthly</button>
				<button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Donate once</button>
			</div>
			<div className={toggleState === 1 ? "content active-content" : "content"}>
				<p>I would like to make a monthly donation of</p>
				<Button onClick={() => setDonation(10)}>£10</Button>
				<Button onClick={() => setDonation(40)}>£40</Button>
				<Button onClick={() => setDonation(75)}>£75</Button>
				<Button onClick={() => setDonation(100)}>£100</Button>
				<Input onChange={event => setDonation(event.target.value)} />
				<Button>Donate £{donationAmount} monthly</Button>
			</div>

			<div className={toggleState === 2 ? "content active-content" : "content"}>
				<p>I would like to make a one-off donation of</p>
				<Button onClick={() => setDonation(10)}>£10</Button>
				<Button onClick={() => setDonation(40)}>£40</Button>
				<Button onClick={() => setDonation(75)}>£75</Button>
				<Button onClick={() => setDonation(100)}>£100</Button>
				<Input onChange={event => setDonation(event.target.value)} />
				<Button>Donate £{donationAmount} today</Button>
			</div>

			<div className='container-content'>
				<Message>£{donationAmount} Could help answer an emergency call to our Animal Rescue Line</Message>
			</div>

			<div className='container-footer'>
				<Hyperlink>Link</Hyperlink>

				<span>All Direct Debits are protected by the Direct Debit Guarantee.</span>

				<Image src='image1.jpg' height='20' width='20' alt='test alt text' loading='lazy' />
			</div>
		</div>
	)
}

export default Donation