import React from 'react'
import Button from '../components/atoms/button/Button'
import Hyperlink from '../components/atoms/hyperlink/Hyperlink'

const Home = () => (
	<>
		<h1>Home</h1>
		<p>This is a test of the homepage.</p>

		<Button className='test-btn'>£6</Button>
		<Button>£12</Button>
		<Button>£18</Button>
		<Button>£30</Button>

		<Button url='https://www.google.com'>Google</Button>

		<Hyperlink href='https://www.hastingsdirect.com' target='_blank'>Test</Hyperlink>
	</>
)

export default Home