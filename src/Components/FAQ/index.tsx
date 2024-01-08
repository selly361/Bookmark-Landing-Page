import { faqData } from 'Constants'
import React from 'react'
import FAQItem from './FAQItem'

function FAQ() {
	return (
		<section className='FAQ'>
			<article className='FAQ__article'>
				<h3 className='FAQ__article__head heading--medium'>
					Frequently Asked Questions
				</h3>
				<p className='FAQ__article__body'>
					Here are some of our FAQs. If you have any other questions you’d like
					answered please feel free to email us.
				</p>
			</article>
			<ul className='FAQ__list'>
				{faqData.map((data) => <FAQItem {...data} />)}
			</ul>
			<button className='button FAQ__button'>More Info</button>
		</section>
	)
}

export default FAQ
