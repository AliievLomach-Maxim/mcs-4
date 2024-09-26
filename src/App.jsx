// import TestMemo from './components/TestMemo/TestMemo'

// import { useState } from 'react'
// import Timer from './components/Timer/Timer'
//
import TestRef from './components/TestRef/TestRef'
import LangContextProvider from './context/LangContextProvider'
// import TestRef2 from './components/TestRef2/TestRef2'

const App = () => {
	return (
		<div>
			<LangContextProvider>
				{/* <TestMemo /> */}
				<TestRef />
				{/* <TestRef2 /> */}
				{/* <button onClick={toggle}>toggle</button>
			{showTimer && <Timer />} */}
			</LangContextProvider>
		</div>
	)
}

export default App
