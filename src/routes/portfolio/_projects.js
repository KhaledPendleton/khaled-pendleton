import fs from 'fs';
import path from 'path';
import marked from 'marked';

const contentDir = 'content/portfolio';

function parseMarkdown(markdown) {
    const match = /---\n([\s\S]+?)\n---/.exec(markdown);
	const content = markdown.slice(match[0].length);
	const frontMatter = match[1];
    const metadata = {};
    
    frontMatter.split('\n')
        .forEach(pair => {
            const colonIndex = pair.indexOf(':');
			const key = pair.slice(0, colonIndex).trim();
			const value = pair.slice(colonIndex + 1).trim();
			metadata[key] = value;
        });

    return Object.freeze({ metadata, content });
}

export function getProjects() {
    const slugs = fs.readdirSync(contentDir)
        .filter(file => (path.extname(file) === '.md'))
        .map(file => file.slice(0, -3));

    return slugs.map(getProject)
        .sort((a, b) => {
            return (a.metadata.publishedOn < b.metadata.publishedOn) ?
			1 : -1;
        });
}

export function getProject(slug) {
    const fileName = `${ contentDir }/${ slug }.md`;

    if (!fs.existsSync(fileName)) {
        // Project doesn't exist
        return null;
    }

    const file = fs.readFileSync(fileName, 'utf-8');
    const { content, metadata } = parseMarkdown(file);
    const date = new Date(`${ metadata.publishedOn } EDT`);
    const html = marked(content);
    
    metadata.dateString = date.toDateString();

    return Object.freeze({ slug, metadata, html });
}

export default Object.freeze({ getProjects, getProject });