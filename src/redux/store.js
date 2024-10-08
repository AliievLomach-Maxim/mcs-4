import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { balanceReducer } from './balance/reducer'
import { localeReducer } from './locale/reducer'

const rootReducer = combineReducers({
	balance: balanceReducer,
	locale: localeReducer,
})

export const store = createStore(rootReducer, devToolsEnhancer())

// const initialState = {
// 	balance: {
// 		value: 0,
// 	},
// 	locale: {
// 		value: 'ua',
// 	},
// }

// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'balance/deposit':
// 			return {
// 				...state,
// 				balance: {
// 					...state.balance,
// 					value: state.balance.value + action.payload,
// 				},
// 			}
// 		case 'balance/withdraw':
// 			return {
// 				...state,
// 				balance: {
// 					...state.balance,
// 					value: state.balance.value - action.payload,
// 				},
// 			}
// 		case 'local/change':
// 			return {
// 				...state,
// 				locale: {
// 					...state.locale,
// 					value: action.payload,
// 				},
// 			}

// 		default:
// 			return state
// 	}
// }

// export const store = createStore(reducer, devToolsEnhancer())
