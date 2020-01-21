import { getPost } from './_posts.js';

const cache = new Map();

export function get(req, res, next) {
    const { slug } = req.params;
    
    if (process.env.NODE_ENV !== 'production' || !cache.has(slug)) {
        const post = getPost(slug);
        cache.set(slug, JSON.stringify(post));
    }

    const headers = { 'Content-Type': 'application/json' };
    const json = cache.get(slug);

    if (json) {
        res.writeHead(200, headers);
        res.end(json);
    } else {
        const error = JSON.stringify({ message: 'Post not found' });
        res.writeHead(404, headers);
        res.end(error);
    }
}
