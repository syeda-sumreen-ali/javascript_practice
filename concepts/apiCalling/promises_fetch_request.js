const fetch = require('node-fetch');

const getPost = async () => {
	let url = 'https://jsonplaceholder.typicode.com/todos/1';
	return new Promise((resolve, reject) => {
		try {
			fetch(url)
				.then(res => {
					resolve(res.json())
				})

		} catch (err) {
			reject(err)
		}
	})
}
async function main() {
	try {
		const result = await getPost()
		console.log("RESULT", result)

	} catch (err) {
		console.log(err)
	}
}

main()
