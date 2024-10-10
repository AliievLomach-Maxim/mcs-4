// export const localeAction = (value) => ({
// 	payload: value,
// 	type: 'local/change',
// })

import { createAction } from '@reduxjs/toolkit'

export const localeAction = createAction('local/change')
