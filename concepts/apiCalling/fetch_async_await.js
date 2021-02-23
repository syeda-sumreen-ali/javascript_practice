const fetch = require('node-fetch')

let url = 'https://jsonplaceholder.typicode.com/todos/1'

// calling async  await so that the further code only run if it got response  
const req = async () => {
	try {
		// fetch return a promise from which we need to convert data into json
		let res = await fetch(url)
		// converting in json format but which also return a promise
		data = await res.json()
		// return data
		return data

	} catch (error) {
		console.log("network error")
		return false
	}

}

// the req method return a promise status pending that's why we are calling it in async await method so it will wait till it get the response from req 
const main = async () => {
	const record = await req()
	if (record) {
		// write in debug console in its original type 
		console.log(record)
		// write in string format
		process.stdout.write(JSON.stringify(record))
	}

}
main()