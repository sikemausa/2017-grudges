const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = app.set('port', process.env.PORT || 3001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.locals.title = 'Grudge List';
app.locals.grudges = [];

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/grudges', (request, response) => {
    response.send(app.locals.grudges);
});

// app.post('/grudges', (request, response) => {
//   const data = request.body;
//   data.id = data.id;
//   data.dateAdded = data.dateAdded;
//   data.name = data.name;
//   data.offense = data.offense;
//   app.locals.grudges.push(data);
//   response.status(201).send({ data });
// });

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = server;
