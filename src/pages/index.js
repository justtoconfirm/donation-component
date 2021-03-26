import React from 'react'
import Button from '../components/atoms/button/Button'

const Home = () => (
	<>
		<h1>Home</h1>
		<p>This is a test of the homepage.</p>

		<Button className='test-btn'>£6</Button>
		<Button>£12</Button>
		<Button>£18</Button>
		<Button>£30</Button>
	</>
)

export default Home