const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const url = require('url')
const fetch = require('isomorphic-fetch');

app.prepare().then(() => {
  const server = express()

  server.get('/vk-api/:method', (req, res) => {
    const vkUrl = 'http://api.vk.com/method/' + req.params.method + '?' + url.parse(req.url).query;
    console.log('vk url: ', vkUrl)
    fetch(vkUrl)
      .then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      }).then(function(answer) {
          res.json(answer);
      });
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})