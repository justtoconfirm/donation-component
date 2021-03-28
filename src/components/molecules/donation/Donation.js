import React, { useState } from 'react'
import Button from '../../atoms/button/Button'
import Input from '../../atoms/input/Input'
import Message from '../../atoms/message/Message'
import Hyperlink from '../../atoms/hyperlink/Hyperlink'
import Image from '../../atoms/image/Image'

import './donation.scss'

const Donation = () => {

	const [ toggleState, setToggleState ] = useState(() => {
		return 1
	})

	const [ donationAmount, setDonationAmount ] = useState(() => {
		return 40
	})

	const toggleTab = index => {
		setToggleState(index)
	}

	const setDonation = amount => {
		setDonationAmount(amount)
	} 
	
	return (
		<div className='m-donations'>
			<div className='m-donations__tabs-container'>
				<button className={toggleState === 1 ? 'm-donations__tab m-donations__tab--active' : 'm-donations__tab'} onClick={() => toggleTab(1)}>Donate monthly</button>
				<button className={toggleState === 2 ? 'm-donations__tab m-donations__tab--active' : 'm-donations__tab'} onClick={() => toggleTab(2)}>Donate once</button>
			</div>
			<div className='m-donations__inner'>

				<p>I would like to make a {toggleState === 2 ? 'one-off' : 'monthly'} donation of</p>

				<div className={toggleState === 1 ? 'm-donations__content m-donations__content--active' : 'm-donations__content'}>
					
					<div className='m-donations__form-group'>
						<Button onClick={() => setDonation(10)}>£10</Button>
						<Button onClick={() => setDonation(40)}>£40</Button>
						<Button onClick={() => setDonation(75)}>£75</Button>
						<Button onClick={() => setDonation(100)}>£100</Button>
						<Input type='number' placeholder='Other amount' onChange={event => setDonation(event.target.value)} />
						<Button theme='secondary'>Donate £{donationAmount} monthly</Button>
					</div>
				
				</div>

				<div className={toggleState === 2 ? 'm-donations__content m-donations__content--active' : 'm-donations__content'}>
					
					<div className='m-donations__form-group'>
						<Button onClick={() => setDonation(10)}>£10</Button>
						<Button onClick={() => setDonation(40)}>£40</Button>
						<Button onClick={() => setDonation(75)}>£75</Button>
						<Button onClick={() => setDonation(100)}>£100</Button>
						<Input type='number' placeholder='Other amount' onChange={event => setDonation(event.target.value)} />
						<Button theme='secondary'>Donate £{donationAmount} today</Button>
					</div>
				
				</div>

				<Message>£{donationAmount} Could help {toggleState === 2 ? 'an Animal Rescue Team take on an urgent animal rescue' : 'answer an emergency call to our Animal Rescue Line'}</Message>
			</div>

			<div className='m-donations__footer'>
				<Hyperlink>{toggleState === 2 ? `I would like to give monthly` : `I would like to make a one-off donation`}</Hyperlink>

				<span>All Direct Debits are protected by the Direct Debit Guarantee.</span>

				<Image src='image1.jpg' height='20' width='20' alt='test alt text' loading='lazy' />
			</div>
		</div>
	)
}

export default Donation