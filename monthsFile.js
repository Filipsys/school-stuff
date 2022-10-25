// let month = prompt("Enter your month here: ");
let month = "jan"

let listMonths = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

var numbersMonths = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];


function checkMonths (month, numbersMonths, listMonths) {
	for (let i in listMonths) {
		console.log(i);
		console.log(numbersMonths[i]);
		if (i == month) {
		} else {
			console.log("Looks like you didn't input a correct month!");
		}
	}
}

checkMonths(month, numbersMonths, listMonths);
