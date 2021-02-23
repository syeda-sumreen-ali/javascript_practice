// string reversal

const stringReversal = str => {
	let reverseString = "";
	for (let index = str.length - 1; index >= 0; index--) {
		reverseString += str[index]
	}
	return reverseString
}

let res = stringReversal('Sumreen')
console.log(res)