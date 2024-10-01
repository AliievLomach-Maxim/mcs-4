import { useEffect, useState } from 'react'
import { fetchProducts } from '../../api/products-api'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
	const [products, setProducts] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const getProducts = async () => {
			try {
				setIsLoading(true)
				setError(false)
				const result = await fetchProducts()
				setProducts(result.products)
			} catch (error) {
				console.error(error)
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}
		getProducts()
	}, [])
	return (
		<div>
			{isLoading && <h1>isLoading...</h1>}
			{error && <h1>oops...</h1>}
			{products && (
				<ul>
					{products.map((el) => (
						<li key={el.id}>
							<Link to={`/products/${el.id}`}>{el.title}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default ProductsPage
