function getMessages(req, res) {
  res.send('<ul><li>MESSAGES</li></ul>')
};

function postMessage(req, res) {
  console.log('Updating messages...')
};

module.exports = {
  getMessages,
  postMessage
};