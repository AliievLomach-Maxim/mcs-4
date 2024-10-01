import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import Navigation from './components/Navigation/Navigation'
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage'
import UserDetails from './components/UserDetails/UserDetails'
import CommentDetails from './components/CommentDetails/CommentDetails'

const App = () => {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/products/:productId' element={<ProductDetailsPage />}>
					<Route path='user' element={<UserDetails />} />
					<Route path='comment' element={<CommentDetails />} />
				</Route>
				<Route path='*' element={<h2>Oops..404</h2>} />
			</Routes>
		</div>
	)
}

export default App
