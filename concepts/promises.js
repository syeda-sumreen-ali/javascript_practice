const add = (n1, n2) => {
	return new Promise((resolve, reject) => {
		var sum = n1 + n2;
		if (sum) {
			resolve(sum)
		} else {
			reject('could not add two numbers')
		}
	})
}

const subtract = (n1, n2) => {
	return new Promise((resolve, reject) => {
		var sub = n1 - n2;
		if (sub) {
			resolve(sub)
		} else {
			reject('could not subtract numbers')
		}
	})
}

const isFirstGreater = (n1, n2) => {
	return new Promise((resolve, reject) => {
		let message;
		if (typeof n1 === 'number' && typeof n2 === 'number') {
			if (n1 > n2) {
				resolve(message = `Yes! ${n1} is greater than ${n2}`)
			} else {
				reject(message = `No! ${n1} is greater than ${n2}`)
			}
		} else {
			// console.log(typeof n1, typeof n2)
			reject(message = "invalid input numbers")
		}
	})
}
//if all promises are independent then you can use promise.all
// for example fetching data from different apis and all are independent from each other but if promise2 uses promise1 result then you need to use promise using .then chaining


// // PROMISE CHAINING METHOD

// console.log("============== PROMISE USING .THEN CHAINING =================="),
add(3, 3)
	.then(val =>
		subtract(val, 10)
	)
	.then(val2 =>
		isFirstGreater(val2, 9)
	)
	.catch(err => console.log(`Error:- ${err}`))




//  PROMISE.ALL
var promise1 = Promise.resolve(add(4, 4))
var promise2 = Promise.resolve(subtract(2, 4))
var promise3 = Promise.resolve(isFirstGreater(19, 4))

Promise
	.all([promise1, promise2, promise3])
	.then((val) => {
		// console.log("============== PROMISE.ALL SUCCESS =================="),
		console.log(val)
	})
	.catch(err => {
		// console.log("============== PROMISE.ALL ERROR =================="),
		console.log(err)
	})
