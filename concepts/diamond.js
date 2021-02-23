const printDiamond = num => {
	let space = num
	for (let i = 0; i <= num; i++) {
		let star = ""

		for (let j = 0; j <= space; j++) {
			star += " "
		}

		for (let j = 0; j < i; j++) {
			star += "* "
		}
		console.log(star)
		space--
	}

	for (let i = num; i >= 0; i--) {
		let star = ""
		for (let j = 0; j <= space; j++) {
			star += " "

		}
		for (let j = 0; j <= i; j++) {
			star += "* "
		}
		console.log(star)
		space++
	}

}

printDiamond(5)