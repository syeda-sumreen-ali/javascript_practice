const request = require('request')

const promisefiedRequest = function (options) {
	return new Promise((resolve, reject) => {
		request(options, (error, response, body) => {
			if (response) {
				return resolve(response);
			}
			if (error) {
				return reject(error);
			}
		})
	})
}

async function getScore(year, team, page, goals) {
	const options = {
		url: `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${page}`,
		method: 'GET',
	}
	let response = await promisefiedRequest(options)
	let result = JSON.parse(response.body).data
	let score = 0
	for (let i = 0; i < result.length; i++) {
		score += parseInt(result[i][goals])
	}

	return score

}

async function main() {

	let team1Score = await getScore('2011', 'Barcelona', 'page1', 'team1goals')
	let team2Score = await getScore('2011', 'Barcelona', 'page2', 'team2goals')
	let totalScore = team1Score + team2Score
	console.log("TEAM 1 SCORE:", team1Score)
	console.log("TEAM 2 SCORE:", team2Score)
	console.log("TOTAL SCORE:", totalScore)
}
main()