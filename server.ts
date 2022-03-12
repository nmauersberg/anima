const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 7000);

const server = app.listen(app.get('port'), function () {
  const { port } = server.address();
  console.log('listening on port ', port);
});
