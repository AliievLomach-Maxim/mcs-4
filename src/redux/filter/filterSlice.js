import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchFilter: '',
	// a: 10,
	// b: 20,
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeSearchFilter: (state, { payload }) => {
			state.searchFilter = payload
		},
	},
})

export const selectFilterValue = (state) => state.filter.searchFilter
// export const selectA = (state) => state.filter.a
// export const selectB = (state) => state.filter.b

// export const selectResult = (state) => {
// 	const a = selectA(state)
// 	const b = selectB(state)
// 	return a + b
// }

export const filterReducer = filterSlice.reducer
export const { changeSearchFilter } = filterSlice.actions
