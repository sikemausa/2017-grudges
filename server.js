const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = app.set('port', process.env.PORT || 3001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.locals.title = 'Grudge List';
app.locals.grudges = [];

app.get('/', (request, response) => {
  response.send('Hello World!');
  console.log(response);
});

app.get('/grudges', (request, response) => {
    response.send(app.locals.urls);
});

app.post('/urls', (request, response) => {
  const data = request.body;
  data.url = data.url;
  data.clicks = data.clicks;
  data.date = data.date || Date.now();
  app.locals.urls.push(data);
  response.status(201).send({ data });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

app.get('/urls/:shortenedUrl', (request, response) => {
  let targetUrl = app.locals.urls.filter((url) =>
  url.shortenedUrl===request.params.shortenedUrl)[0];

  if (!targetUrl) { response.send(`It's Broken.`)}
  ++targetUrl.clicks;
  response.redirect( targetUrl.url );
});

module.exports = server;
