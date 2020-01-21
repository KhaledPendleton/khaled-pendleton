import { getPosts } from './_posts.js';

let contents;

export function get(req, res) {
	if (!contents || process.env.NODE_ENV !== 'production') {
		const posts = getPosts()
			.filter(post => !post.metadata.draft)
			.map(({slug, metadata }) => ({ slug, metadata }));
			
		contents = posts;
	}

	const headers = { 'Content-Type': 'application/json' };
	res.writeHead(200, headers);
	res.end(contents);
}