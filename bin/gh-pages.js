const ghPages = require('gh-pages');

const directory = '__sapper__/export/';
const options = {
    branch: 'gh-pages',
    repo: 'https://khaledpendleton.github.io/khaled-pendleton/',
    message: generateCommitMessage(),
    user: {
        name: 'Khaled Pendleton',
        email: 'hi@khaledpendleton.com'
    }
}

function generateCommitMessage() {
    const now = new Date();
    const dateStr = now.toDateString();
    return `Website published - ${dateStr}`;
}

function onCommitEnd() {
    console.log(`Commit complete to "${ options.repo }", branch: "${ options.branch }".`);
    console.log('Website updated.');
}

console.log('Initializing website update');
console.log(`Beginning commit to "${ options.repo }", branch: "${ options.branch }".`);
ghPages.publish(directory, options, onCommitEnd);