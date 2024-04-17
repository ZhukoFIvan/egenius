import { FC } from 'react'
import Reviews from '../../Reviews/Reviews'
import Feedback from '../../feedback/Feedback'
import Landing from '../../landing/Landing'
import Layout from '../../layout/Layout'

const Home: FC = () => {
	return (
		<Layout>
			<Landing />
			<Reviews />
			<Feedback />
		</Layout>
	)
}

export default Home
