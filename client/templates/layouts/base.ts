import manifest from '../../dist/manifest.json';

// import { bodyStyle } from '../../styles';

type BaseContext = {
	title: string;
	content: string;
};

export const base = (ctx: BaseContext) => {
	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="stylesheet" type="text/css" href="dist/styles/index.css" />

				<title>${ctx.title} | Document</title>
			</head>
			<body class="p-1 max-w-5xl m-auto flex flex-col">
				<nav>
					<ul class="flex text-blue-700 space-x-1 underline">
						<li><a href="/">home</a></li>
						<li><a href="/about">about</a></li>
					</ul>
				</nav>

				${ctx.content}

				<script src=${`dist/` + manifest['scripts/index.js'].file}></script>
			</body>
		</html>
	`;
};
