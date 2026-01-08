const http = require('node:http');
const fs = require('node:fs').promises;

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
      const studentData = await fs.readFile(databasePath, 'utf8');
      res.write('This is the list of our students\n');
      const allStudent = studentData.split('\n').slice(1).filter(
        (student) => student.length > 0,
      );
      res.write(`Number of students: ${allStudent.length}\n`);

      const allSeparatedDatas = [];
      for (const student of allStudent) {
        const column = student.split(',');
        allSeparatedDatas.push(column);
      }
      const fields = {};
      for (const element of allSeparatedDatas) {
        const firstname = element[0];
        const field = element[3];

        if (!fields[field]) fields[field] = [];

        fields[field].push(firstname);
      }
      const lines = Object.keys(fields).map(
        (field) => `Number of students in ${field}: ${
          fields[field].length}. List: ${fields[field].join(', ')}`,
      );
      res.write(lines.join('\n'));
    } catch (error) {
      res.writeHead(404, { 'Content-type': 'text/plain' });
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
