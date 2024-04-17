import { FC, useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import { MdClose, MdMicNone, MdNotificationsActive } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import Button from '../../UI/button/Button'
import styles from './Header.module.scss'

const Header: FC = () => {
	const [isShowMenu, setIsShowMenu] = useState(true)

	const handleClickShowMenu = () => {
		setIsShowMenu(!isShowMenu)
	}

	return (
		<>
			<header className={styles.container}>
				<div className={styles.left}>
					<h1 className={styles.logo}>ЕГЭниус</h1>
					<h2 className={styles.hello}>Good afternoon,Dasha!</h2>
				</div>
				<div className={styles.right}>
					<button className={styles.notif}>
						<MdNotificationsActive size={20} color='#394049' />
					</button>
					<Button handleClick={handleClickShowMenu}>
						{isShowMenu ? <RxHamburgerMenu size={20} /> : <MdClose size={25} />}
						<span>Menu</span>
					</Button>
					<div className={styles.search}>
						<MdMicNone size={20} color='blue' />
						<input type='text' />
						<div className={styles.line}></div>
						<LuSearch size={18} color='gray' />
					</div>
				</div>
			</header>
			<section></section>
		</>
	)
}

export default Header
