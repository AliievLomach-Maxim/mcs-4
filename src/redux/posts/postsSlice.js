import { createSlice } from '@reduxjs/toolkit'
import { createPost, fetchPosts, removePost } from './postsOps'

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		isLoading: false,
		error: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.isLoading = true
				state.error = false
			})
			.addCase(fetchPosts.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.posts = payload
			})
			.addCase(fetchPosts.rejected, (state) => {
				state.isLoading = false
				state.error = true
			})
			.addCase(removePost.pending, (state) => {
				state.isLoading = true
				state.error = false
			})
			.addCase(removePost.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.posts = state.posts.filter((el) => el.id !== payload.id)
			})
			.addCase(removePost.rejected, (state) => {
				state.isLoading = false
				state.error = true
			})
			.addCase(createPost.pending, (state) => {
				state.isLoading = true
				state.error = false
			})
			.addCase(createPost.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.posts.push(payload)
			})
			.addCase(createPost.rejected, (state) => {
				state.isLoading = false
				state.error = true
			})
	},
})

export const postsReducer = postsSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'
// import { fetchPosts } from './postsOps'

// const postsSlice = createSlice({
// 	name: 'posts',
// 	initialState: {
// 		posts: [],
// 		isLoading: false,
// 		// error: false,
// 		error: '',
// 	},
// 	// reducers:{
// 	// }
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(fetchPosts.pending, (state) => {
// 				state.isLoading = true
// 				// state.error = false
// 				state.error = ''
// 			})
// 			.addCase(fetchPosts.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.posts = payload
// 			})
// 			// .addCase(fetchPosts.rejected, (state, { payload }) => {
// 			// 	state.isLoading = false
// 			// 	state.error = payload
// 			// })
// 			.addCase(fetchPosts.rejected, (state, { error }) => {
// 				state.isLoading = false
// 				// console.log('action', action)
// 				state.error = error.message
// 			})
// 	},
// })

// export const postsReducer = postsSlice.reducer
