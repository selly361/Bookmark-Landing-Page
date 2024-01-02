import { ITabData } from "Types"

const tabsInfoData = [
	{
		title: 'Bookmark in one click',
		text: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`,
		illustration: 'images/features-tab-1.svg'
	},
	{
		title: 'Intelligent search',
		text: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`,
		illustration: 'images/features-tab-2.svg'
	},
	{
		title: 'Share your bookmarks',
		text: `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`,
		illustration: 'images/features-tab-3.svg'
	}
]

const tabsData: ITabData[] = [
	{
		index: 0,
		idName: 'bookmarking',
		isChecked: true,
		labelText: 'Simple Bookmarking'
	},
	{
		index: 1,
		idName: 'searching',
		isChecked: false,
		labelText: 'Speedy Searching'
	},
	{
		index: 2,
		idName: 'sharing',
		isChecked: false,
		labelText: 'Easy Sharing'
	}
]

const faqData = [
	{
		id: 0,
		question: 'What is Bookmark?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
	},
	{
		id: 1,
		question: 'How can I request a new browser?',
		answer:
			'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
	},
	{
		id: 2,
		question: 'Is there a mobile app?',
		answer:
			'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
	},
	{
		id: 3,
		question: 'What about other Chromium browsers?',
		answer:
			'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
	}
]

export { tabsInfoData, tabsData, faqData }
