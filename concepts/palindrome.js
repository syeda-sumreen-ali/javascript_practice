const { lstat } = require("fs")

console.log("PALINDROME PROGRAM")
// palindrome 
const isPalindrome = (str) => {
	let string = str.toLowerCase()

	if (string[0] === string[string.length - 1]) {
		let index = 0
		let mid = string.length % 2 !== 1 ? string.length / 2 : string.length / 2 + 0.5;
		for (i = string.length - 1; i >= 0; i--) {
			if (index < mid) {
				if (string[index] === string[i]) {
					index++
				}
				else {
					console.log("not palindrome")
					break
				}
			}
		}
		console.log("it's palindrome")
	} else {
		console.log(string[0], string[string.length])
		console.log('not palindrome')
	}
}

isPalindrome('zaraz')

