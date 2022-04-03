import { base } from '../layouts/base';

type HomeContext = {
	info: string;
};

const homeHTML = ({ info }: { info: string }) => {
	return `
		<article class="prose lg:prose-xl">
			<h1>${info}</h1>
			<blockquote>don't forget where you came from</blockquote>
		</article>
		<form class="mt-1">
			<input id="input" type="text" autocomplete="off" class="border"/>
			<button id="submit" type="submit" class="bg-blue-600 text-sm p-1 leading-none text-gray-100">submit</button>
		</form>
		<button id="toggle">click</button>
		<div id="todo"></div>
	`;
};

export const home = (arg: HomeContext) => {
	const html = homeHTML({ info: arg.info });
	return base({ content: html, title: 'home' });
};
