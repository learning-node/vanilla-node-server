# vanilla-node-server
Vanilla Node Server

Use the boilerplate code in `server.js` to test out how a vanilla node server works.

- [ ] In your terminal, navigate to the repository directory.
- [ ] Use `curl` in your terminal to make requests to the vanilla node server. The server should be running on port 3000, and the domain name will be `localhost`.

Here are some examples:
- [ ] GET request to the home route `'/'`: `curl localhost:3000`
- [ ] POST request to the home route `'/'`: `curl -X POST localhost:3000`
- [ ] GET request to the `/about` route: `curl localhost:3000/about`

Read through the boilerplate code to see how the server is choosing to respond to different combinations of request methods and request urls. Add more combinations of your own and use `curl` to test it.

Question to think about: What happens if you call `res.end`, and then call `res.write` immediately after it?

- [ ] Make the server listen for a POST request to `/getwebpage` and then in the body, there should be an object with a key `page`. That should be associated with a value of a URL. For example, `{ page: 'http://www.google.com' }`. The server should get the data from that web page, and send it back to the client. For example, the client could be a curl command of `curl -X POST --data '{ "page": "http://www.google.com" }' localhost:3000` and the server should send back the homepage from Google.