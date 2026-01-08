const express = require('node:express');

const hostname = '127.0.0.1';
const port = 1245;

const app = express();

app.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

app.get('/students', (req, res) => {

});

app.listen(port, () => {
  console.log(`Server running at the port ${port}`);
});
