import { useEffect, useState } from 'react'
import { fetchProducts } from '../../api/products-api'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const ProductsPage = () => {
	const [products, setProducts] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	const [params, setParams] = useSearchParams()

	const location = useLocation()
	console.log('location', location)

	const queryValue = params.get('title') ?? ''

	const handleChange = ({ target: { value } }) => {
		if (!value) {
			params.delete('title')
			setParams(params)
			return
		}
		params.set('title', value)
		setParams(params)
		// clear filter
		// setParams({})
		// !!!
		// setParams({ title: value })
		// setParams({ ...params.getAll(),title: value })
	}

	const filteredProducts = products?.filter((el) =>
		el.title.toLowerCase().includes(queryValue.toLowerCase())
	)

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
			{/*  */}
			<input type='text' placeholder='search by title' value={queryValue} onChange={handleChange} />
			{/*  */}
			{filteredProducts && (
				<ul>
					{filteredProducts.map((el) => (
						<li key={el.id}>
							<Link to={`/products/${el.id}`} state={location}>
								{el.title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default ProductsPage
