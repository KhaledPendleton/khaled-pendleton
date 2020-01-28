import { getProject } from './_projects.js';

const cache = new Map();

export function get(req, res) {
    const { slug } = req.params;

    if (process.env.NODE_ENV !== 'production' || !cache.has(slug)) {
        const project = getProject(slug);
        if (project) {
            cache.set(slug, JSON.stringify(project));
        }
    }

    const headers = { 'Content-Type': 'application/json' };
    const json = cache.get(slug);

    if (json) {
        res.writeHead(200, headers);
        res.end(json);
    } else {
        const error = JSON.stringify({ message: 'Project not found' });
        res.writeHead(404, headers);
        res.end(error);
    }
}