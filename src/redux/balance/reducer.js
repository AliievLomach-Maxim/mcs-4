import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const balanceSlice = createSlice({
	name: 'balance!!!!',
	initialState,
	reducers: {
		deposit: (state, { payload }) => {
			state.value = state.value + payload
		},
		withdraw: (state, { payload }) => {
			state.value = state.value - payload
		},
	},
})

export const { deposit, withdraw } = balanceSlice.actions
export const balanceReducer = balanceSlice.reducer

// export const balanceReducer = createReducer(initialState, (builder) => {
// 	builder
// 		.addCase(depositAction, (state, { payload }) => {
// 			state.value = state.value + payload
// 		})
// 		.addCase(withdrawAction, (state, { payload }) => {
// 			state.value = state.value - payload
// 		})
// })
// export const balanceReducer = createReducer(initialState, (builder) => {
// 	builder
// 		.addCase(depositAction, (state, { payload }) => {
// 			state.value = state.value + payload
// 			// return {
// 			// 	...state,
// 			// 	value: state.value + action.payload,
// 			// }
// 		})
// 		.addCase(withdrawAction, (state, { payload }) => {
// 			state.value = state.value - payload
// 			// return {
// 			// 	...state,
// 			// 	value: state.value - action.payload,
// 			// }
// 		})
// })

// export const balanceReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'balance/deposit':
// 			return {
// 				...state,
// 				value: state.value + action.payload,
// 			}
// 		case 'balance/withdraw':
// 			return {
// 				...state,
// 				value: state.value - action.payload,
// 			}

// 		default:
// 			return state
// 	}
// }
