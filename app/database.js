const mysql = require('mysql2/promise');
const random_name = require('node-random-name')

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
     const connection = await mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database:'nodedb'
    });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}


async function getPeople(){
    const conn = await connect();
    const [rows] =  await conn.query("SELECT * FROM people")
    return rows
}

async function insertPerson(){
    const conn = await connect();
    await conn.query(`INSERT INTO people(name) values('${random_name()}')`)
}


module.exports = {getPeople,insertPerson}