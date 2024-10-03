import { Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage/HomePage'
// import ProductsPage from './pages/ProductsPage/ProductsPage'
// import Navigation from './components/Navigation/Navigation'
// import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage'
// import UserDetails from './components/UserDetails/UserDetails'
// import CommentDetails from './components/CommentDetails/CommentDetails'
import { lazy, Suspense } from 'react'

const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'))
const Navigation = lazy(() => import('./components/Navigation/Navigation'))
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage/ProductDetailsPage'))
const CommentDetails = lazy(() => import('./components/CommentDetails/CommentDetails'))
const UserDetails = lazy(() => import('./components/UserDetails/UserDetails'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))

const App = () => {
	return (
		<div>
			<Navigation />
			<Suspense fallback={<h1>LOADING COMPONENT...</h1>}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/products' element={<ProductsPage />} />
					<Route path='/products/:productId' element={<ProductDetailsPage />}>
						<Route path='user' element={<UserDetails />} />
						<Route path='comment' element={<CommentDetails />} />
					</Route>
					<Route path='*' element={<h2>Oops..404</h2>} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
