
let input = prompt("Input:");
input = input.split(" ");

console.log(input);

if (input.length % 2 == 1) {
	for (let i = 0; i < input.length; i++) {

		for (let i = 1; i < input.length && i % 2 == 1; i++) {
			console.log(`${i} - odd`);
		}
		if ("+" == input[1] || "-" == input[1] || "*" == input[1] || "/" == input[1]) {

		} else {
			console.log(`Ooops! Looks like you did something wrong...`);
		}
	}
} else {
	console.log(`Ooops! Looks like you did something wrong...`);
}