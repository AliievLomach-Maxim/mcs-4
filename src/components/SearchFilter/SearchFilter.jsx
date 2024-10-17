import { useDispatch, useSelector } from 'react-redux'
import { changeSearchFilter, selectFilterValue } from '../../redux/filter/filterSlice'

const SearchFilter = () => {
	const searchFilterValue = useSelector(selectFilterValue)

	const dispatch = useDispatch()

	const handleChange = ({ target: { value } }) => {
		dispatch(changeSearchFilter(value))
	}
	// const result = A + B
	return (
		<>
			<input
				type='text'
				placeholder='search...'
				value={searchFilterValue}
				onChange={handleChange}
			/>
		</>
	)
}

export default SearchFilter
