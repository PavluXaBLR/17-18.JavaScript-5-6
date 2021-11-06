/*1) Создайте объект своей любимой машины, у которой будут свойства
(Марка, цвет, кол-во дверей, лошадиные силы, объем двигателя, механика\автомат)
и клонируете этот объект в другой объект с помощью двух способов, которые мы разбирали )*/

let car = {
	carBrand: 'Nissan',
	model: '240sx',
	carColor: 'red',
	dorInCar: 3,
	engineValume: 2.4,
	horsePower: 140,
	transmission: 'manual',
};


let newCar = {};

for (let key in car) {
	newCar[key] = car[key];
}


let newCarTwo = Object.assign ({}, car);

console.log(car)
console.log(newCar)
console.log(newCarTwo)


//2) В объекте книга вывести в консоль ключи, если значение имеет булевский тип данных

let book = {
	numberOfPages : 545,
	cover  : true,
	isTheAuthorAlive  : false,
	isBestseller  : true,
	booksEditions  : 20000000,
};
for (let key in book) {
	if (typeof book[key] == 'boolean') {
		console.log(book[key]);
	}
}

/*3) function animal(obj){
	return ?
}

Напишите код, который возвращает строку..

"This black cat has 4 legs"
..из объекта  {name:"cat", legs:4, color:"black"}
 */

let pet = {
	name:"cat",
	legs:4,
	color:"black",

	animal() {
		console.log(`This ${this.color} ${this.name} has ${this.legs} legs`);
	}
}
pet.animal ();

function animal(obj) {
	return (`This ${pet.color} ${pet.name} has ${pet.legs} legs`);
}
console.log(animal());

/*4) Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
	read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
* посмотреть в учебнике и разобраться как выполняется!*/

	let calculator = {
	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	},

	read(a, b) {
		this.a = a
		this.b = b
	}


}
calculator.read(5, 9);
console.log( calculator.sum() );
console.log( calculator.mul() );

/*5) Напишите функцию funcName( loremString ) , которая будет возвращать "true" если строка
"loremString" содержит подстроки "lorem", "ipsum" и "amet"
*строку loremString я буду вводить вручную при вызове функции
** Учтите случайное нажатие на CapsLock и случайный пробел в начале ;)*/


 let str = `loremString`;
	function checkNameFirst(str, includes) {
		let checkStr = str.toLowerCase() + str.trim();
		return checkStr.includes(includes);

}

console.log(checkNameFirst(``, `ipsum`))


function checkName(str) {
	let checkStr = str.toLowerCase() + str.trim();
	return checkStr.includes(`lorem`) || checkStr.includes(`ipsum`) || checkStr.includes(`amet`);

}

console.log(checkName( ` IpSun loremString`))


/*6) Напишите функцию funcName(str), возвращающую строку str с заглавным первым символом.*/

function funcName(str) {
	console.log(str[0].toUpperCase()+str.slice(1));
}
funcName("привет друг")

/*7) Напишите функцию funcName(str, maxLength), которая будет проверять длину строки, и если длина
превышает максимальное значение длины, сокращать до этого значения + в конце добавить "..."
 */
function funcName(str, maxLength) {
	return  str.slice(0 , maxLength)+"...";
}
console.log(funcName("Привет , у меня не очень выходит все это и это грустно",  40))

/*8) С помощью конструктора создать функцию, которая будет создавать объекты пользователей
(user) у которых будут ключи name, surname, age, address */

function Form (name, surname, age, address) {
	this.name = name;
	this.surname = surname;
	this.age = age;
	this.address = address;
}


let user = new Form (`Bob`, `Dub`, 21, `Klen st.`)

console.log(user)