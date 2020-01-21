import fs from 'fs';
import path from 'path';

export function getPosts() {
	const slugs = fs.readdirSync('content/blog')
		.filter(file => (path.extname(file) === '.md'))
		.map(file => file.slice(0, -3));

	return slugs.map(getPost)
		.sort((a, b) => (a.metadata.pubdate < b.metadata.pubdate));
}

export default Object.freeze({ getPosts });