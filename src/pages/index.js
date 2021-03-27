import React from 'react'
import Button from '../components/atoms/button/Button'
import Hyperlink from '../components/atoms/hyperlink/Hyperlink'
import Image from '../components/atoms/image/Image'
import Input from '../components/atoms/input/Input'
import Donation from '../components/molecules/donation/Donation'

const Home = () => (
	<>
		<h1>Home</h1>
		<p>This is a test of the homepage.</p>

		<Image src='image1.jpg' height='140' width='140' alt='test alt text' loading='lazy' />

		<Input placeholder='Name' size="20" />

		<Button className='test-btn'>£6</Button>
		<Button>£12</Button>
		<Button>£18</Button>
		<Button>£30</Button>

		<Button url='https://www.google.com'>Google</Button>

		<Hyperlink href='/about/' target='_blank'>About</Hyperlink>

		<Donation />
	</>
)

export default Home