const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});