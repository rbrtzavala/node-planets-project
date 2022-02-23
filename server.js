const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Nikola Tesla',
  },
  {
    id: 1,
    name: 'Sir Isaac Newton',
  },
  {
    id: 2,
    name: 'Albert Einstein',
  }
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${delta}ms: ${req.method} ${req.url}`);
})

app.get('/friends', (req, res) => {
  res.json(friends)
})

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend)
  }
  else {
    res.status(404).json({
      error: 'Friend Does not exist'
    });
  }
})

app.get('/messages', (req, res) => {
  res.send('<ul><li>MESSAGES</li></ul>')
})

app.post('/MESSAGES', (req, res) => {
  console.log('Updating messages...')
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})