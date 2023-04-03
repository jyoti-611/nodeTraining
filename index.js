const http = require('http');
const url = require('url')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const {
        pathname
    } = url.parse(req.url)
    
    let result = "Hello From Jyoti"
    if (pathname === "/get_birth_date") {
        result = `My birth date is ` + new Date('11/6/1998').toDateString();
    }
    if (pathname === "/get_details") {
        result = `\t Name: Jyoti singh
        Email : jyoti@techtic.agency`
    }
    res.end(result);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});