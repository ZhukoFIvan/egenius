import { FC } from 'react'
import Button from '../UI/button/Button'
import styles from './Landing.module.scss'
const Landing: FC = () => {
	return (
		<div className={styles.block}>
			<div className={styles.info}>
				<h1>The best interactive online school</h1>
				<div>
					Our project is not just a platform with tasks. This is a unique
					training in the format of a game and competition. Each participant
					will have their own helper character.
				</div>
				<Button>Read More</Button>
			</div>
			<img src='/public/dasha.PNG' alt='dashka' />
		</div>
	)
}

export default Landing
