import { createReducer } from '@reduxjs/toolkit'
import { localeAction } from './actions'

const initialState = {
	value: 'en',
}

export const localeReducer = createReducer(initialState, (builder) => {
	builder.addCase(localeAction, (state, { payload }) => {
		state.value = payload
	})
})
// export const localeReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'local/change':
// 			return {
// 				...state,
// 				value: action.payload,
// 			}

// 		default:
// 			return state
// 	}
// }
