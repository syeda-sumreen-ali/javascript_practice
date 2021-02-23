const factorial = num => {
	let fact = 1
	for (let index = num; index > 0; index--) {
		fact = fact * index
	}
	return fact
}

const res = factorial(4)
console.log(res)