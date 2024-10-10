import { useDispatch, useSelector } from 'react-redux'
// import { depositAction, withdrawAction } from '../../redux/balance/actions'
import { localeAction } from '../../redux/locale/actions'
import { deposit, withdraw } from '../../redux/balance/reducer'

const HomePage = () => {
	const dispatch = useDispatch()
	const value = useSelector((state) => {
		return state.balance.value
	})
	const locale = useSelector((state) => state.locale.value)

	const handleDeposit = () => {
		dispatch(deposit(10))
	}

	const handleWithdraw = () => {
		dispatch(withdraw(100))
	}
	const handleChangeLang = ({ target: { value } }) => {
		dispatch(localeAction(value))
	}

	return (
		<div>
			Balance:{value}
			<hr />
			<hr />
			<button onClick={handleDeposit}>Deposit</button>
			<br />
			<button onClick={handleWithdraw}>withdraw</button>
			<hr />
			<hr />
			<hr />
			<hr />
			<br />
			<br />
			<br />
			<select onChange={handleChangeLang} value={locale}>
				<option value='en'>EN</option>
				<option value='ua'>UA</option>
			</select>
		</div>
	)
}

export default HomePage
