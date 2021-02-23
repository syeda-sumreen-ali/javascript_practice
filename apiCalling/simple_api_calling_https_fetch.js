const fetch = require('node-fetch');
const https = require('https');

let url = 'https://jsonplaceholder.typicode.com/todos/1'

// API CALLING USING HTTPS
const res = https.request(url, res => {
	console.log(res.statusCode)
	res.on('data', d => {
		process.stdout.write(d)
	})
})
res.on('error', e => console.log(e))
res.end()


// 	API CALLING USING FETCH 
fetch(url)
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.log(err))


