import { base } from '../layouts/base';

const aboutHTML = () => {
	return `<h1>about page</h1> `;
};

export const about = () => {
	const html = aboutHTML();
	return base({ content: html, title: 'about' });
};
