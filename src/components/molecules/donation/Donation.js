import React, { useState } from 'react'
import Button from '../../atoms/button/Button'
import Input from '../../atoms/input/Input'
import Message from '../../atoms/message/Message'
import Hyperlink from '../../atoms/hyperlink/Hyperlink'
import Image from '../../atoms/image/Image'

import './donation.scss'

const Donation = () => {

	const [ appState, changeState ] = useState({
		activeObject: null,
		objects: [
			{ 
				id: 0,
				value: 10
			}, 
			{ 
				id: 1,
				value: 12 
			}, 
			{ 
				id: 2,
				value: 18
			},
			{
				id: 3,
				value: 30
			}
		]
	});

	const toggleActive = index => {
		changeState({ ...appState, activeObject: appState.objects[index] });
	}

	const toggleActiveStyles = index => {
		if (appState.objects[index] === appState.activeObject) {
			return 'a-btn--active';
		} else {
			return ''
		}
	}

	const [ toggleState, setToggleState ] = useState(() => {
		return 1
	})

	const [ donationAmount, setDonationAmount ] = useState(() => {
		return 12
	})

	const toggleTab = index => {
		setToggleState(index)
	}

	const setDonation = amount => {
		setDonationAmount(amount)
	} 
	
	return (
		<div className='flex-container'>
			<div className='m-donations'>

				<div className='m-donations__tabs-container'>
					<button className={toggleState === 1 ? 'm-donations__tab m-donations__tab--active' : 'm-donations__tab'} onClick={() => toggleTab(1)}>Donate monthly</button>
					<button className={toggleState === 2 ? 'm-donations__tab m-donations__tab--active' : 'm-donations__tab'} onClick={() => toggleTab(2)}>Donate once</button>
				</div>
				
				<div className='m-donations__inner'>

					<p>I would like to make a {toggleState === 2 ? `one-off` : `monthly`} donation of</p>

					<div className={toggleState === 1 ? 'm-donations__content m-donations__content--active' : 'm-donations__content'}>
						
						<div className='m-donations__form-group'>
									
							{appState.objects.map((elements, index) => (
								<Button key={index} className={toggleActiveStyles(index)} onClick={() => {toggleActive(index); setDonation(elements.value)}}>£{elements.value}</Button>
							))}

							<Input type='number' placeholder='Other amount' onChange={event => setDonation(event.target.value)} />
								
							<Button theme='secondary' hasDropShadow>Donate £{donationAmount} monthly</Button>
						</div>
					
					</div>

					<div className={toggleState === 2 ? 'm-donations__content m-donations__content--active' : 'm-donations__content'}>
						
						<div className='m-donations__form-group'>

							{appState.objects.map((elements, index) => (
								<Button key={index} className={toggleActiveStyles(index)} onClick={() => {toggleActive(index); setDonation(elements.value)}}>£{elements.value}</Button>
							))}
								
							<Input type='number' placeholder='Other amount' onChange={event => setDonation(event.target.value)} />

							<Button theme='secondary' hasDropShadow>Donate £{donationAmount} today</Button>

						</div>
					
					</div>

					<Message>£{donationAmount} Could help {toggleState === 2 ? `an Animal Rescue Team take on an urgent animal rescue` : `answer an emergency call to our Animal Rescue Line`}</Message>
				</div>

				<div className='m-donations__footer'>
					<div className='flex-row'>
						<div className='flex-column'>
							<Hyperlink className='m-donations__footer-link'>{toggleState === 2 ? `I would like to give monthly` : `I would like to make a one-off donation`}</Hyperlink>
						</div>

						<div className='flex-column flex-column--right'>
							<span className={toggleState === 2 ? 'm-donations__footer-text m-donations__footer-text--hidden' : 'm-donations__footer-text'}>All Direct Debits are protected by the Direct Debit Guarantee.</span>
						</div>

						<div className='flex-column flex-column--right'>
							<div className={toggleState === 1 ? 'm-donations__footer-images--hidden' : ''}>
								<Image src='image1.jpg' height='20' width='20' alt='' loading='lazy' />
								<Image src='image2.jpg' height='20' width='20' alt='' loading='lazy' />
							</div>
							<div className={toggleState === 2 ? 'm-donations__footer-images--hidden' : ''}>
								<Image src='image3.jpg' height='20' width='20' alt='' loading='lazy' />
								<Image src='image4.jpg' height='20' width='20' alt='' loading='lazy' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Donation