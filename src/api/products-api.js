import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://dummyjson.com/',
})

export const fetchProducts = async () => {
	const { data } = await instance('/products')
	return data
}

export const fetchSingleProduct = async (id) => {
	const { data } = await instance(`/products/${id}`)
	return data
}

export const fetchSingleComment = async (id) => {
	const { data } = await instance(`/comments/${id}`)
	return data
}

export const fetchSingleUser = async (id) => {
	const { data } = await instance(`/users/${id}`)
	return data
}
