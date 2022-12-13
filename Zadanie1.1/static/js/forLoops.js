
// TWORZENIE ZMIENNYCH

let m = prompt("Input:");
let n = prompt("Input:");

let m_dont_touch = m;
let n_dont_touch = n;

let empty_text_1 = ""
let empty_text_2 = ""
let empty_text_3 = ""


// SPRAWDZANIE
for (m; m < n; m++) {

	if (m % 2 == 1 || m % 5 == 0) {
		empty_text_1 += `${m} `
	}
	
	if (m % 3 == 2) {
		let cut_number = m.toString().split("");

		if (cut_number[cut_number.length - 1] == 3 || cut_number[cut_number.length - 1] == 4) {
			empty_text_3 += `${m} `
		}
	}
	
	if (m % 5 == 0 && m % 3 != 0) {
		empty_text_2 += `${m} `
	}	
}


document.write(`<h3>Wartości nieparzyste lub podzielne przez 5 z przedziału od ${m_dont_touch} do ${n_dont_touch}:</h3>`)
document.write(`${empty_text_1}`)

document.write(`<h3>Liczby z przedziału od ${m_dont_touch} do ${n_dont_touch} które w dzieleniu przez 3 dają resztę 2 i cyfrą jedności jest 3 lub 4:</h3>`)
document.write(`${empty_text_3}`)

document.write(`<h3>Liczby z przedziału od ${m_dont_touch} do ${n_dont_touch}, podzielne przez 5 ale niepodzielne przez 3:</h3>`)
document.write(`${empty_text_2}`)


document.write(`<br><br>-------------------------------------------------------------------------------------------------------------<br>`)





document.write(`Trójkąt<br>`)

let star_number = prompt("Enter your star triangle height:")
let temp_var = 1
let temp_var2 = 1

let new_var = ""


while (temp_var <= star_number) {
	if (temp_var2 <= star_number) {
		new_var += "* "

		temp_var2++
	}
	
	document.write(`${new_var}<br>`);
	temp_var++
}