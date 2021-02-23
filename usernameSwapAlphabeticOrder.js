
function possibleChange(usernames) {
	let canSwap = []
	for (let index = 0; index < usernames.length; index++) {
		for (let sub_index = 0; sub_index < usernames[index].length; sub_index++) {
			if (usernames[index][sub_index] > usernames[index][sub_index + 1]) {
				canSwap.push('YES')
				break;
				// console.log(usernames[index][sub_index],usernames[index][sub_index+1], true)
			} else {
				canSwap.push('NO')
				break;
			}
		}
	}
	return canSwap

}

let usernames = ['hydra', 'sara']
let result = possibleChange(usernames)
console.log(result)