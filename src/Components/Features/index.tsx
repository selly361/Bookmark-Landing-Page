import { tabsData } from 'Constants'
import { useFeaturesContext } from 'Contexts'

function Features() {
	const { isChanging, handleFocus, featuresData, tabs, handleClick } = useFeaturesContext()

	return (
		<section className='features'>
			<article className='features__article'>
				<h2 className='features__article__heading heading--medium'>Features</h2>
				<p className='features__article__body'>
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</article>
			<div className='features__tab-container'>
				<fieldset className='features__tab-container__fieldset'>
					{tabs.map((tab) => (
						<>
							<input
								type='radio'
								name='tab'
								id={tab.idName}
								className={`features__tab-input features__tab-input--${
									tab.index + 1
								}`}
								onFocus={handleFocus}
								onClick={handleClick}
								checked={tab.isChecked}
								data-index={tab.index}
							/>
							<label
								htmlFor={tab.idName}
								className={`features__tab-label ${
									isChanging ? 'features__tab-label--active' : ''
								}`}
							>
								{tab.labelText}
							</label>
						</>
					))}
					<div className='features__tab-bar'></div>
					<span className='features__tab-overlay'></span>
				</fieldset>
			</div>
			<div
				className={`features__content-container ${
					isChanging ? 'features__content-container--animation' : ''
				}`}
			>
				<div className='features__tab-illustration'>
					<img src={featuresData.illustration} alt='' />
				</div>
				<div className='features__tab-content'>
					<h2 className='features__tab-content__heading heading--medium'>
						{featuresData.title}
					</h2>
					<p className='features__tab-content__body'>{featuresData.text}</p>
					<button className='button'>More Info</button>
				</div>
			</div>
		</section>
	)
}

export default Features
