const initialState = {
	value: 'en',
}

export const localeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'local/change':
			return {
				...state,
				value: action.payload,
			}

		default:
			return state
	}
}
