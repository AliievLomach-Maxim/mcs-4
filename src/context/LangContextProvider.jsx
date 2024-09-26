import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const useLangContext = () => useContext(LangContext)

const LangContextProvider = ({ children }) => {
	const [lang, setLang] = useState('en')
	const changeLang = (lan) => {
		setLang(lan)
	}
	const date = new Date()
	return (
		<LangContext.Provider
			value={{
				lang,
				changeLang,
				curDate: date,
			}}
		>
			{children}
		</LangContext.Provider>
	)
}

export default LangContextProvider
