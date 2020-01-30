const ghPages = require('gh-pages');
const fs = require('fs');

const directory = '__sapper__/export/';
const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/KhaledPendleton/khaled-pendleton',
    message: generateCommitMessage(),
    user: {
        name: 'Khaled Pendleton',
        email: 'hi@khaledpendleton.com'
    }
}

function generateCnameFile(path) {
    const file = `${ path }CNAME`;
    const content = 'khaledpendleton.com';
 
    console.log(`Beginning CNAME file generation at "${ file }"`);

    fs.appendFileSync(file, content, err => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log(`CNAME file generated at ${ file }.`);
    });
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
generateCnameFile(directory);

console.log(`Beginning commit to "${ options.repo }", branch: "${ options.branch }".`);
ghPages.publish(directory, options, onCommitEnd);