const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

function randText() {
  const textList = ["Hello!", "Hi", "What's up?", "Hello world!", "Hey"];

  return textList[(Math.floor(Math.random() * textList.length))];
}

app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/hello", (req, res) => {
  res.send({
    message: randText()
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(3000, () => {
  const address = server.address();
  if (address) {
    console.log(`Server running at http://${address.address}:${address.port}/`);
    console.log(`API listening on port 3000`);
  }
});
