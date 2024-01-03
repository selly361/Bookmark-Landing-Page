import { IExtensionData } from 'Types'

function ExtensionCard({ title, Logo, version }: IExtensionData) {
	return (
		<div className='extensions__cards__card'>
			<Logo />
			<h4 className='extensions__cards__card__head heading--small'>{title}</h4>
			<p className='extensions__cards__card__body'>Minimum version {version}</p>
			<button className='extensions__cards__card__button button--large'>
				Add & Install Extension
			</button>
		</div>
	)
}

export default ExtensionCard
