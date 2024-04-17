import { FC } from 'react'
import Button from '../UI/button/Button'
import styles from './Feedback.module.scss'

const Feedback: FC = () => {
	return (
		<section className={styles.block}>
			<div className={styles.text}>
				<h2>Остались вопросы?</h2>
				<p>Оставляй заявку, и в ближайшее время с вами свяжутся!</p>
			</div>
			<form action=''>
				<label htmlFor=''>Имя</label>
				<input type='text' placeholder='Имя' />
				<label htmlFor=''>Телефон</label>
				<input type='text' placeholder='+7(999)123-45-67' />
				<Button>Оставить заявку</Button>
			</form>
		</section>
	)
}

export default Feedback
