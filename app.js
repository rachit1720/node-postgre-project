const http = require("http");
const { Client } = require("pg");

const PORT = 3000;

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432
});

const server = http.createServer(async (req, res) => {
    try {
        const result = await client.query("SELECT NOW()");

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(
            "<h1>Node.js + PostgreSQL</h1>" +
            "<p>Connected to PostgreSQL successfully!</p>" +
            "<p>Database Time: " + result.rows[0].now + "</p>"
        );

    } catch (error) {
        console.error(error);

        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Database connection failed");
    }
});

async function startServer() {
    try {
        await client.connect();

        console.log("Connected to PostgreSQL!");

        server.listen(PORT, () => {
            console.log("Server running on port " + PORT);
        });

    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}

startServer();
