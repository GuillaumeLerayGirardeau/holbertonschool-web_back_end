const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

const databasePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let output = 'This is the list of our students\n';

  const originalLog = console.log;
  try {
    const logs = [];

    console.log = (...args) => {
      logs.push(args.join(' '));
      originalLog(...args);
    };

    await countStudents(databasePath);

    console.log = originalLog;

    output += logs.join('\n');
    res.send(output);
  } catch (err) {
    console.log = originalLog;
    res.status(404).send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

module.exports = app;
