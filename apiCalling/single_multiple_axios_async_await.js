const axios = require('axios');

// AXIOS
(async () => {
	try {
		const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
		console.log(response.data)
		// console.log(response.data.explaination)
	} catch (err) {
		console.log(err.response.body)
	}
})();

//AXIOS MULTIPLE REQUEST  USING AXIOS.ALL
(async () => {
	try {
		const [response1, response2] = await axios.all([
			axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-03-18'),
			axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-03-17')
		]);
		console.log("RESPONSE 1", response1.data);
		console.log("RESPONSE 2", response2.data)
	} catch (error) {
		console.log(error.response.body)
	}
})()
