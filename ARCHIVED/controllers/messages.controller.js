const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'Message Page',
    friend: 'P Butts',
  });
  // res.sendFile(path.join(__dirname, '../public', 'images', 'skimountain.jpg'));
};

function postMessage(req, res) {
  console.log('Updating messages...')
};

module.exports = {
  getMessages,
  postMessage
};