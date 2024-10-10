import { balanceReducer } from './balance/reducer'
import { localeReducer } from './locale/reducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postReducer } from './postSlice/slice'

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'post',
	storage,
}

const persistLocaleConfig = {
	key: 'locale',
	storage,
}
const persistedReducer = persistReducer(persistConfig, postReducer)
const persistedLocaleReducer = persistReducer(persistLocaleConfig, localeReducer)

const rootReducer = {
	balance: balanceReducer,
	locale: persistedLocaleReducer,
	posts: persistedReducer,
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
