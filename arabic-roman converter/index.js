var arabicNumber = document.getElementById("arabic-number");
var convertButton = document.getElementById('convert-button');
convertButton.addEventListener("click", function(event) {

	event.preventDefault();
	// document.getElementById('roman-number').innerHTML = "";
	// console.log(parseInt(arabicNumber.value))
	let answer;
	switch (parseInt(arabicNumber.value)) {
		case 1:
			answer = "I";
			break;
		case 2:
			answer = "II";
			break;
		case 3:
			answer = "III";
			break;
		case 4:
			answer = "IV";
			break;
		case 5:
			answer = "V";
			break;
		case 6:
			answer = "VI";
			break;
		case 7:
			answer = "VII";
			break;
		case 8:
			answer = "VIII";
			break;
		case 9:
			answer = "IX";
			break;
		case 10:
			answer = "X";
			break;
		default:
			answer = "Error! Enter a number less than 10";
	}
	var error = document.getElementById('roman-number');
	var errorText = document.createElement("p");
	console.log(answer)
	errorText.textContent = answer;
	error.appendChild(errorText);
})


// let arr = [1, 2, 3, 4, 5, 3, 3];
//
// console.log("This is array");
//
// console.log("This is last element")
//
// let doubleArr = arr.map(item => item*2);
// console.log("Doubled array ", doubleArr );
//
// let foundItem = arr.filter(item => item === 3);
// console.log("Found item ", foundItem);
//
// let total = arr.concat(doubleArr);
// console.log("Total array", total);
//
// let person  = {};
// person.name = "Ernar";
// person.surname = "Dauletbayev"
// person.age = 21;
// console.log("This is Ernar", person)
//
// let defaultPerson = {
// 	name: "Alshyn",
// 	surname: "Maratov",
// 	age: 21
// }
//
// console.log("This is default", defaultPerson);
//
// function Person(name, surname, age) {
// 	this.name = name;
// 	this.surname = surname;
// 	this.age = age;
// }
// let constructPerson = new Person("Obama", "Barak", 55);
// console.log("Obama Barak", constructPerson);
//
// localStorage.setItem("test", 123);
// let getTest = localStorage.getItem("test");
// console.log("This is an element from localStorage", getTest);
//
// localStorage.setItem("arr", JSON.stringify(arr));
// console.log("This is stringified array", JSON.stringify(arr));
// let arrFromStorage = JSON.parse(localStorage.getItem("arr"));
// console.log("Array from storage", arrFromStorage);
//
// let number = 5;
// let stringFive = '5';
// let textNumber = number===stringFive ? 'Equal':'Not equal'; console.log(textNumber);
// // let textNumber = number===stringFive ? console.log('Equal'):console.log('Not equal');
//
// let num = 1;
// switch (num) {
// 	case 1:
// 		console.log("This is one");
// 		break;
// 	case 2:
// 		console.log("This is two");
// 		break;
// 	default:
// 		console.log("This is lolka");
// }
