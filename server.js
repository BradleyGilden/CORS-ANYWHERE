const cors_proxy = require('cors-anywhere');
const port = process.env.PORT || 8080; // Listen on a specific port

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins (adjust for specific origins)
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'] // Optional: remove specific headers
}).listen(port, function() {
  console.log('Running CORS Anywhere on port '+port);
});
