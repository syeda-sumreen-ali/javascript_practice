// let arr1 = [1, 2, 3];
// let arr2 = []


// console.log(arr2)

// let arr = [1, 72, 9, 4]
// let newarr = [5, 1];

// arr.push.apply(arr, newarr)
// // arr.push(newarr)

// Number(arr[1])
// arr.sort()
// console.log("arr", arr)
// console.log("newarr", newarr)

// var min = Math.min.apply(null, arr)
// console.log("min", min)

//============= call() =============//

// function Emp(id, name) {
// 	this.id = id,
// 		this.name = name
// }
// function PermanentEmp(id, name) {
// 	Emp.call(this, id, name)
// }

// let obj = new PermanentEmp(191, 'Sumreen')
// console.log(obj.name)

this.name = 'Oracle';

var website = {
	name: 'tutorialPoint',
	getName: function () { return this.name }
}
retrieveName = website.getName
let boundGetName = retrieveName.bind(website)
console.log(retrieveName())
console.log(boundGetName())

