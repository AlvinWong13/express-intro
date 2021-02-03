const express = require('express');
const quotes = require('./modules/quotes');
//console.log('express', express);

// Create our app
const app = express();

const port = 3000;

// INCANTATION:
// Share any files inside the "public" folder
app.use(express.static('server/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listen for network requests
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('I love you', port);

  // if you see EADDRINUSE error
  // run:
  // killall -9 node
  // try again after
});

app.get('/quotes', function (req, res) {
  console.log('get quotes');
  res.send(quotes.getNextQuote());
});

app.get('/quotes', (req, res) => {
  let quote = req.body.quote_to_add;
  console.log(quote.author);
  console.log(quote.quote);

  // add to quoteData
  quotes.addQuote(quote);
  // respond with ok
  res.sendStatus(200);
});

// Postman
// {
//   "quote_to_add": {
//     "quote": "You found the marble in the oatmeal!",
//     "author": "Stanley Tudexci"
//   }
// }
