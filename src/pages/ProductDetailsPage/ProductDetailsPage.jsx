import { Suspense, useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../../api/products-api'

const ProductDetailsPage = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState(null)

	const location = useLocation()
	const backPath = useRef(location.state ?? '/products')

	const navigate = useNavigate()

	console.log('render')

	useEffect(() => {
		const getSingleProducts = async () => {
			try {
				const res = await fetchSingleProduct(productId)
				setProduct(res)
				//
				// navigate(backPath.current,{state:loca})
			} catch (error) {
				console.error(error)
			}
		}
		getSingleProducts()
	}, [productId])

	return (
		product && (
			<div>
				<button onClick={() => navigate(backPath.current)}>back</button>
				{/* <Link to={backPath.current}>Back</Link> */}
				<ul>
					<li>Title: {product.title}</li>
					<li>ID: {product.id}</li>
					<li>Brand: {product.brand}</li>
					<li>Category: {product.category}</li>

					<img src={product.thumbnail} alt={product.title} width={100} />
				</ul>
				<hr />
				<hr />
				<ul>
					<li>
						<NavLink to='user'>User</NavLink>
					</li>
					<li>
						<NavLink to='comment'>Comment</NavLink>
					</li>
				</ul>
				<Suspense fallback={<h1>LOADING CHILD COMPONENT...</h1>}>
					<Outlet />
				</Suspense>
			</div>
		)
	)
}

export default ProductDetailsPage
