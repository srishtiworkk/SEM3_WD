import fs from 'fs/promises'

async function readFileContent(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}