import { useEffect, useRef } from 'react'

const Timer = () => {
	const intervalId = useRef()

	useEffect(() => {
		intervalId.current = setInterval(() => {
			console.log(new Date().getSeconds())
		}, 1000)
		return () => clearInterval(intervalId.current)
	}, [])

	const handleStop = () => {
		clearInterval(intervalId.current)
	}
	return (
		<div>
			Timer
			<br />
			<button onClick={handleStop}>Stop timer</button>
		</div>
	)
}

export default Timer
