const fetch = require('cross-fetch')

function getData(team, year) {

	let score = 0;
	fetch(`https://jsonmock.hackerrank.com/api/football_matches?${year}&team1=${team}&page=1`)
		.then(res => {
			if (res.status !== 200) {
				console.log('error')
			} else {
				res.json()
					.then(data => {
						for (let index = 0; index < data.data.length; index++) {
							score += parseInt(data.data[index].team1goals);
						}
						// return score
					})
					.catch(error => console.log(error, "Invalid data"))
				console.log("SCAA", score)

			}
		}).catch(error => console.log(error))
	console.log("SCAA", score)
	return score
}

let res = getData('Barcelona', '2011')
console.log("SCORE:", res)

