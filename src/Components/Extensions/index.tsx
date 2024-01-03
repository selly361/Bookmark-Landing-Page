import { extensionsData } from 'Constants'
import ExtensionCard from './ExtensionCard'

function Extensions() {
	return (
		<section className='extensions'>
			<article className='extensions__article'>
				<h3 className='extensions__article__head heading--medium'>
					Download the extension
				</h3>
				<p className='extensions__article__body'>
					We’ve got more browsers in the pipeline. Please do let us know if
					you’ve got a favourite you’d like us to prioritize.
				</p>
			</article>
			<div className='extensions__cards'>
				{extensionsData.map((data) => (
					<ExtensionCard {...data} />
				))}
			</div>
		</section>
	)
}

export default Extensions
