import { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../../api/products-api'

const ProductDetailsPage = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState(null)

	useEffect(() => {
		const getSingleProducts = async () => {
			try {
				const res = await fetchSingleProduct(productId)
				setProduct(res)
			} catch (error) {
				console.error(error)
			}
		}
		getSingleProducts()
	}, [productId])

	return (
		product && (
			<div>
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
				<Outlet />
			</div>
		)
	)
}

export default ProductDetailsPage
