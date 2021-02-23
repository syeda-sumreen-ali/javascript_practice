//JavaScript is an object based language evertything is javascript is object based
// unlike other language you can create object instances without declaring class
//there are three ways to declare objects
//1- using object literal
//2- by creating instance of object using new Object()
//3- using object constructor

// 1- using object literal
// let data = { 		//declaring object
// 	name: "Sara",
// 	salary: 10000
// }
// console.log(data.name, data.salary)


// // 2- by creating instance of object using new Object()
// let example2 = new Object()  // declaring object
// example2.name = "Sara"
// example2.salary = 2000
// console.log(example2)

// 3- by using object constructor

function emp(id, name, salary) {
	this.id = id;
	this.name = name;
	this.salary = salary;

	this.changeSalary = changeSalary;
	function changeSalary(salary) {
		this.salary = salary
	}

	this.getDetail = getDetail;
	function getDetail() {
		console.log('example3: ', this.id, this.name, this.salary)
	}
}
var e = new emp(1, 'Sumreen', 10000)
e.getDetail()
e.changeSalary(30000)
e.getDetail()
