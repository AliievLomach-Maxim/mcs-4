import { useMemo, useState } from 'react'

const TestMemo = () => {
	const [a, setA] = useState(0)
	const [b, setB] = useState(0)
	const [c, setC] = useState(0)

	const result = useMemo(() => {
		console.log('Calculating result')
		return a + b
	}, [a, b])

	// const result = () => {
	// 	for (let i = 0; i < 1000000000; i++) {
	// 		//
	// 	}
	// 	console.log('Calculating result')
	// 	return a + b
	// }
	// const result = useMemo(() => {
	// 	for (let i = 0; i < 1000000000; i++) {
	// 		//
	// 	}
	// 	console.log('Calculating result')
	// 	return a + b
	// }, [a, b])

	return (
		<div>
			<button onClick={() => setA(a + 1)}>state a: {a}</button>
			<button onClick={() => setB(b + 1)}>state b: {b}</button>
			<button onClick={() => setC(c + 1)}>state c: {c}</button>
			<h1>Result {result}</h1>
		</div>
	)
}

export default TestMemo
