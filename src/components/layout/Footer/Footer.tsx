import { FC } from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<footer>
			<div className={styles.container}>
				{/* <img src="" alt="logo" /> */}
				<h1>Logo</h1>
				<div className={styles.links}>
					<h4>Ссылки</h4>
					<p>Главная</p>
					<p>Авторизация</p>
					<p>Ссылка</p>
					<p>Ссылка</p>
					<p>Ссылка</p>
					<p>Ссылка</p>
				</div>
				<div className={styles.communication}>
					<h3>Наши Social Network))</h3>
					<div className={styles.social}>
						<a href='https://vk.com/egeniys'>
							<img src='/public/vk.svg' alt='vk' />
						</a>
						<a href='t.me/ivan_zhuk0v'>
							<img src='/public/tg.svg' alt='tg' />
						</a>
						<a href='www.instagram.com/dar_vi'>
							<img src='/public/inst.svg' alt='inst' />
						</a>
					</div>
					<p>Свяжитесь с нами</p>
					<div className={styles.telephone}>
						<BsTelephoneFill color='#1A1E30' />
						<a href='#'>88005553535</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
