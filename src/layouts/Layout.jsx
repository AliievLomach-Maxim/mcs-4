import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'

const Layout = () => {
	return (
		<div>
			<Navigation />
			<hr />
			<hr />
			<hr />
			<Outlet />
			<footer></footer>
		</div>
	)
}

export default Layout
