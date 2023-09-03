const title = 'Susan Turis Yoga'
const description = 'Brooklyn, NYC based hybrid online Iyengar Yoga instructor Susan Turis personal website'
const url = 'https://susanturisyoga.com'

const config = {
	title,
	description,
	canonical: url,
	openGraph: {
		type: 'website',
		locale: 'en_EN',
		url,
		site_name: 'susanturisyoga.com',
		title,
		description,
		images: [
			{
				url: 'https://susanturisyoga.com/favicon.svg',
				alt: title,
				width: 1280,
				height: 720
			}
		]
	}
};

export default config;