const http = require('node:http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const databasePath = process.argv[2];

/* req : request || res : response */
/* Le return evite des else if et rend le code plus lisible et robuste */
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    return res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    try {
      const logs = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(' '));
        originalLog(...args);
      };
      await countStudents(databasePath);
      console.log = originalLog;
      res.write(logs.join('\n'));
    } catch (error) {
      return res.end('Cannot load the database');
    }
    return res.end();
  }
  res.writeHead(404, { 'Content-type': 'text/plain' });
  return res.end('Page not found');
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
