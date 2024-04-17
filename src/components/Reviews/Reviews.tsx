import { FC } from 'react'
import Flickity from 'react-flickity-component'
import styles from './Reviews.module.scss'
import './slider.css'
const reviews = [
	{
		_id: 1,
		name: 'Дмитрий Пономарев',
		review:
			'Добрый день! Хотелось бы поблагодарить Вас за занятия. Дима стал гораздо увереннее решать задачки, в школе теперь хвастается всем) Теперь уже не так страшно за будущие олимпиады',
		grade: 7
	},
	{
		_id: 2,
		name: 'Алина Федосеева',
		review:
			'Добрый день, спасибо вам за занятия. Алика ждет теперь каждого и радуется, что стало что-то получаться. В следующем году уже планируем писать олимпиады',
		grade: 7
	},
	{
		_id: 3,
		name: 'Руслан Шолохов',
		review:
			'Здравствуйте, да, все замечательно. Заметили, что стала попроще идти математика. Самостоятельно теперь делает пробники решает, говорит получается. Спасибо Вам!',
		grade: 7
	},
	{
		_id: 4,
		name: 'Дмитрий Пономарев',
		review:
			'Добрый день! Хотелось бы поблагодарить Вас за занятия. Дима стал гораздо увереннее решать задачки, в школе теперь хвастается всем) Теперь уже не так страшно за будущие олимпиады',
		grade: 7
	},
	{
		_id: 5,
		name: 'Дмитрий Пономарев',
		review:
			'Добрый день! Хотелось бы поблагодарить Вас за занятия. Дима стал гораздо увереннее решать задачки, в школе теперь хвастается всем) Теперь уже не так страшно за будущие олимпиады',
		grade: 7
	},
	{
		_id: 6,
		name: 'Дмитрий Пономарев',
		review:
			'Добрый день! Хотелось бы поблагодарить Вас за занятия. Дима стал гораздо увереннее решать задачки, в школе теперь хвастается всем) Теперь уже не так страшно за будущие олимпиады',
		grade: 7
	}
]

interface IReview {
	_id: number
	name: string
	review: string
	grade: number
}
const flickityOptions = {
	initialIndex: 2
}

const Reviews: FC = () => {
	return (
		<>
			<h1 className={styles.title}>Отзывы наших учеников!</h1>
			<Flickity
				className={styles.slider} // default ''
				elementType={'div'} // default 'div'
				options={flickityOptions} // takes flickity options {}
				disableImagesLoaded={false} // default false
				reloadOnUpdate // default false
				static
			>
				{reviews.map((item: IReview) => (
					<div className={styles.card}>
						<div className={styles.block}>
							<h1>{item.name}</h1>
							<span>{item.grade}</span>
							<p>класс</p>
						</div>
						<div className={styles.review}>{item.review}</div>
					</div>
				))}
			</Flickity>
		</>
	)
}

export default Reviews
