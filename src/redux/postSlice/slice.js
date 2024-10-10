import { createSlice } from '@reduxjs/toolkit'
import data from '../../../postsData.json'

const initialState = {
	posts: data,
}

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addNew: (state, { payload }) => {
			state.posts.push(payload)
		},
		removePost: (state, { payload }) => {
			state.posts = state.posts.filter((el) => el.id !== payload)
		},
		updatePost: (state, { payload }) => {
			// state.posts = state.posts.map((el) => {
			// 	if (el.id === payload.id) {
			// 		return { ...el, payload }
			// 	} else {
			// 		return el
			// 	}
			// })
			state.posts = state.posts.map((el) => (el.id === payload.id ? { ...el, payload } : el))
		},
	},
})

export const { addNew, removePost, updatePost } = postSlice.actions
export const postReducer = postSlice.reducer
