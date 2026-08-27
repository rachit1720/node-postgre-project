const { Client } = require("pg");

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432
});

client.connect()
    .then(() => {
        console.log("Connected to PostgreSQL!");

        return client.query("SELECT NOW()");
    })
    .then(result => {
        console.log("Database time:", result.rows[0]);
        client.end();
    })
    .catch(error => {
        console.error("Database connection failed:", error);
    });
