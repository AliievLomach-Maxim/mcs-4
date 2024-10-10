import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from 'clsx'

const generateActiveClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.isActive)
}

const Navigation = () => {
	return (
		<nav className={css.navigation}>
			<NavLink className={generateActiveClass} to='/'>
				Home
			</NavLink>
			<NavLink className={generateActiveClass} to='/posts'>
				POsts
			</NavLink>
			<NavLink className={generateActiveClass} to='/products'>
				Products
			</NavLink>
		</nav>
	)
}

export default Navigation
