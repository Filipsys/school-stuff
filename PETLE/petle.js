// SKRYPT SPRAWDZAJĄCY LICZBĘ CZY JEST PARZYSTA

// Tworzenie zmiennych
let i = 1;
let isEven;

// Rozpoczęcie pętli
for (i; i <= 10; i++) {
	if (i % 2 == 1) {						/* Sprawdzanie czy numer jest parzysty */
		isEven = "parzyste";
	} else {
		isEven = "nieparzyste";
	}

	document.write(`${i} jest ${isEven}<br>`);						/* Drukowanie wyniku */
}


document.write(`-------------------------------------`);
// --------------------------------------------------

// SKRYPT SPRAWDZAJĄCY CZY SUMA LICZB BĘDZIE PATRZYSTA

// Tworzenie zmiennych const
const numberAConst = 1;
const numberBConst = 20;

// Tworzenie zmiennych
let numberA = 1;
let numberB = 20;
let numberSum = 0;

// Rozpoczęcie pętli while
while (numberA <= numberB) {
	if (numberA % 2 == 0) {						/* Sprawdzanie czy numer jest parzysty, jeśli tak to dodajemy */
		numberSum += numberA;
	}
	numberA++;
}

// Drukowanie wyniku
console.log(`Suma liczb parzystych od ${numberAConst} do ${numberBConst} wynosi: ${numberSum}`); 


// --------------------------------------------------

// Tworzenie zmiennych
let m = 4;
let n = 40;

let numberString = "";

// Rozpoczęcie pętli
for (m; m < n; m++) {
	if (m % 2 != 0 || m % 7 == 0) {						/* Sprawdzanie czy pętla zawiera liczbę nieparzystą lub podzielną przez 7 */
		numberString += `${m} `;
	}
}

alert(numberString);						/* Drukowanie wyniku za pomocą alertu */


// --------------------------------------------------

// Tworzenie zmiennych
let passwdInput = prompt(`Podaj hasło poniżej.`);
let passwd = "12345"
let running = true

// Rozpoczęcie pętli while
while (running) {
	if (passwdInput == passwd) {						/* Sprawdza czy hasło wpisane jest równe haśle zapisanemu w zmiennej, jeśli jest równe, wyjdź z pętli (niebezpieczne ponieważ oosba mogłaby to łatwo przeczytać) */
		running = false
	} else {
		passwdInput = prompt(`Podaj hasło poniżej.`);						/* Jeśli hasło nie jest poprawne, ponownie zapytaj */
	}
}
// Drukowanie komunikatu
console.log(`Well done! You have entered the correct password!`);


// --------------------------------------------------

// Tworzenie zmiennych
let a = 1;
let b = 100;

// Rozpoczęcie pętli while
while (a <= 100) {
	if (a % 3 == 0 || a % 5 == 0) {						/* Sprawdzanie czy liczba jest podzielna przez 3 lub 5 ORAZ niepodzielna przez 15, drukujemy wynik */
		if (a % 15 != 0) {
			console.log(`${a}`);
		}
	}
	a++;
}
