const http = require('http'); // Native Node module. Does not need to be downloaded separately.
const PORT = 3000;

function processRequest(req, res) { // <-- What are these parameters?

  console.log(`Received ${req.method} request to ${req.url}`);

  // GET request to the home route '/'
  if (req.method === 'GET' && req.url === '/') {
    res.write('Hello World!\n'); // Write response
    res.write('Bye World!\n'); // Write more to the response, just to show that you can.
    res.end(); // End response. What happens if you don't include this line of code?
  }

  // POST request to the home route '/'
  else if (req.method === 'POST') {
    let data = '';
    req.on('data', (chunk) => {
      console.log('GOT DATA', chunk);
      console.log('\n');
      data += chunk;
    });
    req.on('end', () => {
      console.log('END OF BODY');
      res.write('I see you trying to POST. I got: ' + data);
      res.end();
    });
  }

  // GET request to the route '/about'
  else if (req.method === 'GET' && req.url === '/about') {
    res.write("I don't like to talk about myself.\n");
    res.end();
  }

  // If none of the above METHOD and URL combinations are hit, then this is the
  // default message. Typically, it will be a code 404 (NOT FOUND). But we'll just
  // send a funny message.
  else {
    res.write(`I see you are trying to ${req.method} to ${req.url}\n`);
    res.write("I'm sorry, Dave. I'm afraid I can't do that.\n"); 
    res.end();
  }

}

const server = http.createServer(processRequest);

server.listen(PORT);
