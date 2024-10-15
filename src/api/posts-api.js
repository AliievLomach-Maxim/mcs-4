import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://64689aefe99f0ba0a8286f54.mockapi.io',
})

export const getPostsApi = async () => {
	const { data } = await instance('/posts')
	return data
}

export const removePostApi = async (id) => {
	const { data } = await instance.delete(`/posts/${id}`)
	return data
}

export const createPostApi = async (payload) => {
	const { data } = await instance.post('/posts', payload)
	return data
}
