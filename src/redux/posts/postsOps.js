import { createAsyncThunk } from '@reduxjs/toolkit'
import { createPostApi, getPostsApi, removePostApi } from '../../api/posts-api'

export const fetchPosts = createAsyncThunk('posts/fetch', () => getPostsApi())
export const removePost = createAsyncThunk('posts/remove', (id) => removePostApi(id))

export const createPost = createAsyncThunk('posts/create', (data) => createPostApi(data))

// export const fetchPosts = createAsyncThunk('posts/fetch', async (data, thunkAPI) => {
// 	console.log('thunkAPI', thunkAPI)
// 	try {
// 		const data = await getPostsApi()
// 		return data
// 	} catch (error) {
// 		return thunkAPI.rejectWithValue(error.message)
// 		// return error
// 	}
// })
// _____________
// import axios from 'axios'
// const instance = axios.create({
// 	baseURL: 'https://64689aefe99f0ba0a8286f54.mockapi.io',
// })

// export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
// 	// const { data } = instance('/posts')
// 	const data = await getPostsApi()
// 	return data
// })
// export const removePost =

// export const createPost =
