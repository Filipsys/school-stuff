
class Temp {
  diff(number1, number2) {
    if (number1 > number2) return number1 - number2 
    else if (number1 < number2) return number2 - number1 
  }
}

const temp = new Temp();
const now = new Date();

const DayOfTheWeek = {
  0: "niedziela",
	1: "poniedziałek",
	2: "wtorek",
	3: "środa",
  4: "czwartek",
  5: "piątek",
  6: "sobota"
};

document.write(`Dziś jest ${DayOfTheWeek[now.getDay()]}`);
document.write(`<br>`)

// document.write(`Today is ${now.getDay()}/${now.getMonth() + 1}/${now.getFullYear()}`)

document.write(temp.diff(100, 20))

console.log(temp.diff(100, 20));
console.log(temp.diff(123112, 123123));
