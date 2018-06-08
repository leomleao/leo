require('dotenv').config()

const { Client } = require('pg');
const fs = require('fs');

console.log('Reading sql file...');

const sql = fs.readFileSync('sample/world.sql').toString();

console.log('Connecting to DB....');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
client.connect();

console.log('Connected!');

client.query(sql)
    .then(res => {
    console.log('Done!');
    process.exit(0);
    })
    .catch(e => console.error(e.stack))


