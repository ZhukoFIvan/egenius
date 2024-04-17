import { FC } from 'react'
import styles from './Button.module.scss'

interface IButton {
	children: React.ReactNode
	handleClick?: () => void
}

const Button: FC<IButton> = ({ children, handleClick }) => {
	return (
		<button className={styles.btn} onClick={handleClick}>
			{children}
		</button>
	)
}

export default Button
