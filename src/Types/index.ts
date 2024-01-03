interface ITabInfo {
	title: string
	text: string
	illustration: string
}

interface ITabData {
	index: number
	idName: string
	isChecked: boolean
	labelText: string
}

interface IFAQItem {
	id: number
	question: string
	answer: string
}

interface IExtensionData {
	id: number
	Logo: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & {
			title?: string | undefined
		}
	>
	title: string
	version: string
}

export type { IFAQItem, ITabData, ITabInfo, IExtensionData }
