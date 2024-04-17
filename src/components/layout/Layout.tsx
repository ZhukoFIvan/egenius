import React, { FC } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'


interface ILayoutProps {
	children: React.ReactNode
}

const Layout: FC<ILayoutProps> = ({children}) => {
	return (
		<>
		<Header/>
		{children}
		<Footer/>
		</>
	)
}

export default Layout