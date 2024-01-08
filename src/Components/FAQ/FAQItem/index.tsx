import { ArrowIcon } from 'Assets'
import { IFAQItem } from 'Types'
import { useState, useEffect, useRef } from 'react'

function FAQItem({ question, answer }: IFAQItem) {
	const [toggle, setToggle] = useState(false)
	const [height, setHeight] = useState('')
	const divRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (divRef.current) setHeight(`${divRef.current.scrollHeight + 30}px`)
	}, [])

	return (
		<li className='FAQ__list__item'>
			<button
				onClick={() => setToggle((e) => !e)}
				className='FAQ__list__item__question-container'
			>
				{question}
				<ArrowIcon
					className={`FAQ__list__item__arrow-icon ${
						toggle ? 'FAQ__list__item__arrow-icon--active' : ''
					}`}
				/>
			</button>
			<div
				className={`FAQ__list__item__answer-container ${
					toggle ? 'FAQ__list__item__answer-container--active' : ''
				}`}
				ref={divRef}
				style={{height: toggle ? height : 0}}
			>
				<p
					className='FAQ__list__item__answer-container__answer'
					aria-hidden={!toggle ? 'true' : 'false'}
				>
					{answer}
				</p>
			</div>
		</li>
	)
}

export default FAQItem
