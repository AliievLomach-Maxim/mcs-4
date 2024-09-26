import { useLangContext } from '../../context/LangContextProvider'

const Test3 = () => {
	// const test = useContext(LangContext)
	const { lang } = useLangContext()

	return <div>{lang}</div>
}

export default Test3
