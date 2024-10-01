import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchProducts = async () => {
	const { data } = await axios('/products')
	return data
}

export const fetchSingleProduct = async (id) => {
	const { data } = await axios(`/products/${id}`)
	return data
}

export const fetchSingleComment = async (id) => {
	const { data } = await axios(`/comments/${id}`)
	return data
}

export const fetchSingleUser = async (id) => {
	const { data } = await axios(`/users/${id}`)
	return data
}
