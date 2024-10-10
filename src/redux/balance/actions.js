import { createAction } from '@reduxjs/toolkit'

export const depositAction = createAction('balance/deposit')
// export const depositAction = (value) => ({
// 	payload: value,
// 	type: 'balance/deposit',
// })

export const withdrawAction = createAction('balance/withdraw')
// export const withdrawAction = (value) => ({
// 	payload: value,
// 	type: 'balance/withdraw',
// })
