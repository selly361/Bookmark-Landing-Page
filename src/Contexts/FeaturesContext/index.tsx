import { tabsData, tabsInfoData } from 'Constants'
import { IFeaturesContext, IFeaturesProps } from './Features.types'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

const FeaturesContext = createContext<IFeaturesContext>({
	isChanging: false,
	featuresData: tabsInfoData[0],
	handleFocus: () => undefined,
	handleClick: () => {},
	tabs: tabsData
})

function FeaturesProvider({ children }: IFeaturesProps) {
	const [isChanging, setIsChanging] = useState(false)
	const [featuresData, setFeaturesData] = useState(tabsInfoData[0])
	const [tabs, setTabs] = useState(tabsData)
	const prevIndex = useRef<number>(0)
	const isTransitionend = useRef(true)

	const checkIfTransitionEnds = (event: KeyboardEvent): void => {
		if (!isTransitionend.current) {
			event.preventDefault()
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', checkIfTransitionEnds)

		return () => {
			window.removeEventListener('keydown', checkIfTransitionEnds)
		}
	})

	const changeTab = (currIndex: number) => {
		prevIndex.current = currIndex
		isTransitionend.current = false
		setIsChanging(true)

		setTabs(e => e.map(tab => ({
			...tab,
			isChecked: tab.index === currIndex ? true : false
		})));
		

		setTimeout(() => {
			setIsChanging(false)
			isTransitionend.current = true
		}, 1000)

		setTimeout(() => {
			setFeaturesData(tabsInfoData[currIndex])
		}, 500)
	}

	const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		let currIndex = parseInt(event.target.dataset.index as string)
		if (isChanging || prevIndex.current === currIndex) return false

		changeTab(currIndex)
	}

	const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
		let currIndex = parseInt(event.currentTarget.dataset.index as string)
		if (isChanging || prevIndex.current === currIndex) return

		changeTab(currIndex)
	}

	return (
		<FeaturesContext.Provider value={{ isChanging, featuresData,tabs, handleFocus, handleClick }}>
			{children}
		</FeaturesContext.Provider>
	)
}

export const useFeaturesContext = () => useContext(FeaturesContext)

export default FeaturesProvider
