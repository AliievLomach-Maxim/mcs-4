import { configureStore } from '@reduxjs/toolkit'
import { balanceReducer } from './balance/reducer'
import { localeReducer } from './locale/reducer'

import { postsReducer } from './posts/postsSlice'
import { filterReducer } from './filter/filterSlice'

const rootReducer = {
	balance: balanceReducer,
	locale: localeReducer,
	posts: postsReducer,
	filter: filterReducer,
}

export const store = configureStore({
	reducer: rootReducer,
})
