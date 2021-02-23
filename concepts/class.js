//there are two ways you can declare class with class declaration method and named/unnamed class expression
//using declaration method we can't redeclare the class but using expression method we can
// unlike function hoisiting we can't create instance of the class before declaring it


// class declaration method 

// class Employee {
// 	constructor(id, name) {
// 		this.id = id;
// 		this.name = name
// 	}
// 	getDetail() {
// 		console.log(this.id, this.name)
// 	}
// }

// let e = new Employee(101, 'SARA')
// e.getDetail()


// class expression method
//unnamed class
var emp = class {
	constructor(id, name) {
		this.id = id,
			this.name = name
	}
	getDetails() {
		console.log(this.id, this.name)
	}
}

var e = new emp(111, 'Annie')
e.getDetails()

//redeclaring class with named class this time

var emp = class Employee {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
	getDetails() {
		console.log("updated", this.id, this.name)
	}
}

var e = new emp(123, 'Rabia')
e.getDetails()