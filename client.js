const request = require('request');

const opts = {
    method: 'get',
    url: 'http://www.google.com'
};

// GET Google's home page.
request(opts, (err, res, body) => {
    const opts2 = {
        method: 'post',
        url: 'http://localhost:3000',
        body: body
    };

    // POST Google's home page to localhost:3000
    request(opts2, (err2, res2, body2) => {
        console.log('GOT ANSWER FORM LOCALHOST', body);
    });
});