// Database connections
const { Pool } = require('pg');

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;

const pool = new Pool({
	user: DB_USER,
	host: DB_HOST,
	password: DB_PASSWORD,
	port: DB_PORT,
	database: DB_DATABASE,
})

pool.connect().then(() => {
	console.log("Database connection established.")
}).catch( e => {
	// console.log("password from dbconfig: " + DB_PASSWORD)
	throw new Error(e);
})

module.exports = pool;