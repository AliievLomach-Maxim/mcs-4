import { configureStore } from '@reduxjs/toolkit'
import { balanceReducer } from './balance/reducer'
import { localeReducer } from './locale/reducer'

import { postsReducer } from './posts/postsSlice'

const rootReducer = {
	balance: balanceReducer,
	locale: localeReducer,
	posts: postsReducer,
}

export const store = configureStore({
	reducer: rootReducer,
})
