import express from 'express';
import path from 'path';

import pages from './client/templates/pages';

const app = express();
const router = express.Router();

router.get('/', async (req, res) => {
	const html = pages.home({ info: 'MobX + Vite + tailwind + template string' });
	res.send(html);
});

router.get('/about', async (req, res) => {
	const html = pages.about();
	res.send(html);
});

app.use('/dist', express.static(path.resolve('client', 'dist')));
app.use(router);

const PORT = 8000;
app.listen(PORT, () => console.log(`[ON]: http://localhost:${PORT}`));
