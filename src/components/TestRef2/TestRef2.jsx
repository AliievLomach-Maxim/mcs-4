import { useRef, useState } from 'react'

const TestRef2 = () => {
	const [clicker, setClicker] = useState(0)

	const test = useRef(Date.now())

	const date = Date.now()

	const handleClick = () => {
		setClicker(clicker + 1)
	}

	const handleClickDate = () => {
		test.current = Date.now()
	}
	return (
		<div>
			<button onClick={handleClick}>{clicker}</button>
			<h2>{date}</h2>
			<h2>{test.current}</h2>
			<button onClick={handleClickDate}>Set date</button>
		</div>
	)
}

export default TestRef2
