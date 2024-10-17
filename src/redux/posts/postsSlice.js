import { createSelector, createSlice } from '@reduxjs/toolkit'
import { createPost, fetchPosts, removePost } from './postsOps'
import { selectFilterValue } from '../filter/filterSlice'

// posts > []
// isLoading > true
// posts > [...]
// isLoading > false

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		isLoading: false,
		error: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.fulfilled, (state, { payload }) => {
				state.posts = payload
			})
			.addCase(removePost.fulfilled, (state, { payload }) => {
				state.posts = state.posts.filter((el) => el.id !== payload.id)
			})
			.addCase(createPost.fulfilled, (state, { payload }) => {
				state.posts.push(payload)
			})
			// .addCase(updatePost.fulfilled, (state, { payload }) => {
			// 	state.posts.push(payload)
			// })
			.addMatcher(
				(action) => action.type.endsWith('/fulfilled'),
				(state) => {
					state.isLoading = false
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state) => {
					state.isLoading = true
					state.error = false
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				(state) => {
					state.isLoading = false
					state.error = true
				}
			)
	},
})

export const selectPosts = (state) => state.posts.posts
export const selectLoadingPosts = (state) => state.posts.isLoading
export const selectErrorPosts = (state) => state.posts.error

export const selectFilteredPosts2 = (state) => {
	console.log('selectFilteredPosts')
	const posts = selectPosts(state)
	const filterValue = selectFilterValue(state)

	const filteredPosts = posts?.filter((el) =>
		el.title.toLowerCase().includes(filterValue.toLowerCase())
	)
	return filteredPosts
}

export const selectFilteredPosts = createSelector(
	[selectPosts, selectFilterValue],
	(posts, filterValue) => {
		console.log('selectFilteredPosts createSelector')

		const filteredPosts = posts?.filter((el) =>
			el.title.toLowerCase().includes(filterValue.toLowerCase())
		)
		return filteredPosts
	}
)
// useMemo(()=>{},[])

export const postsReducer = postsSlice.reducer
// import { createSelector, createSlice } from '@reduxjs/toolkit'
// import { createPost, fetchPosts, removePost } from './postsOps'
// import { selectFilterValue } from '../filter/filterSlice'

// // posts > []
// // isLoading > true
// // posts > [...]
// // isLoading > false

// const postsSlice = createSlice({
// 	name: 'posts',
// 	initialState: {
// 		posts: [],
// 		isLoading: false,
// 		error: false,
// 	},
// 	extraReducers: (builder) => {
// 		builder
// 			// .addCase(fetchPosts.pending, (state) => {
// 			// 	state.isLoading = true
// 			// 	state.error = false
// 			// })
// 			.addCase(fetchPosts.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.posts = payload
// 			})
// 			// .addCase(fetchPosts.rejected, (state) => {
// 			// 	state.isLoading = false
// 			// 	state.error = true
// 			// })
// 			// .addCase(removePost.pending, (state) => {
// 			// 	state.isLoading = true
// 			// 	state.error = false
// 			// })
// 			.addCase(removePost.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.posts = state.posts.filter((el) => el.id !== payload.id)
// 			})
// 			// .addCase(removePost.rejected, (state) => {
// 			// 	state.isLoading = false
// 			// 	state.error = true
// 			// })
// 			// .addCase(createPost.pending, (state) => {
// 			// 	state.isLoading = true
// 			// 	state.error = false
// 			// })
// 			.addCase(createPost.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.posts.push(payload)
// 			})
// 			// .addCase(createPost.rejected, (state) => {
// 			// 	state.isLoading = false
// 			// 	state.error = true
// 			// })
// 			.addMatcher(
// 				(action) => {
// 					return action.type.endsWith('/pending')
// 				},
// 				(state) => {
// 					state.isLoading = true
// 					state.error = false
// 				}
// 			)
// 			.addMatcher(
// 				(action) => {
// 					return action.type.endsWith('/rejected')
// 				},
// 				(state) => {
// 					state.isLoading = false
// 					state.error = true
// 				}
// 			)
// 	},
// })

// export const selectPosts = (state) => state.posts.posts
// export const selectLoadingPosts = (state) => state.posts.isLoading
// export const selectErrorPosts = (state) => state.posts.error

// export const selectFilteredPosts2 = (state) => {
// 	console.log('selectFilteredPosts')
// 	const posts = selectPosts(state)
// 	const filterValue = selectFilterValue(state)

// 	const filteredPosts = posts?.filter((el) =>
// 		el.title.toLowerCase().includes(filterValue.toLowerCase())
// 	)
// 	return filteredPosts
// }

// export const selectFilteredPosts = createSelector(
// 	[selectPosts, selectFilterValue],
// 	(posts, filterValue) => {
// 		console.log('selectFilteredPosts createSelector')

// 		const filteredPosts = posts?.filter((el) =>
// 			el.title.toLowerCase().includes(filterValue.toLowerCase())
// 		)
// 		return filteredPosts
// 	}
// )
// // useMemo(()=>{},[])

// export const postsReducer = postsSlice.reducer
