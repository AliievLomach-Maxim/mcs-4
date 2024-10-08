export const depositAction = (value) => ({
	payload: value,
	type: 'balance/deposit',
})

export const withdrawAction = (value) => ({
	payload: value,
	type: 'balance/withdraw',
})
