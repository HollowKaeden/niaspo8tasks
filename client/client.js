const http = require('http');

const options = {
	hostname: 'localhost',
	port: 1234,
	path: '/',
	method: 'GET'
};

http.get(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.error(err);
});