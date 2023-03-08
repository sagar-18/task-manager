const path = require('path');
const fs = require('fs');

exports.accessHome = async (req, res) => {
    const filePath = path.join(__dirname, '../README.md');
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading file');
    }
};