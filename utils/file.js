const { throws } = require('assert');

const fs = require('fs').promises;
const filePath = "./database.json";

async function readData() {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Internal Server Error');
    }
}

async function writeData(data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2 /* 2 represents indentation on the JSON */));
    } catch (error) {
        throw new Error('Internal Server Error');
    }
}

module.exports = { readData, writeData };


