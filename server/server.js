const express = require('express');
//console.log('express', express);

// Create our app
const app = express();

const port = 3000;

// Listen for network requests
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('I love you', 3000);

  // if you see EADDRINUSE error
  // run:
  // killall -9 node
  // try again after
});
