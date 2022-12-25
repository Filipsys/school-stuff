//* Print the numbers 1 to 10 using a for loop

for (let num1_i; num1_i <= 10; num1_i++) {
  console.log(num1_i);
}

//* Create an array and iterate through it with a for loop

const num2_arr1 = [1, 2, 3, 4, 5, 6];


for (let num2_i; i < array.length; i++) {
  console.log(array[num2_i]);
}

for (const num2_number1 of num2_arr1) {
  console.log(num2_number1);
}

num2_arr1.forEach((num2_number2) => {
  console.log(num2_number2);
});

/*
    const multiplyByTwo = x => x * 2;

    console.log(multiplyByTwo(4));  // Output: 8
*/

//* Create a loop that prints the even numbers from 1 to 10

for (let num3_i; num3_i <= 10; num3_i++) {
  if (num3_i % 2 == 0) {
    console.log(num3_i);
  }
}

//* Create a loop to calculate the sum of the numbers from 1 to 10

let num4_sum;

for (let num4_i; num4_i <= 10; num4_i++) {
  num4_sum += num4_i;
}

console.log(num4_sum);

//* Create a loop to print the multiples of 3 from 0 to 30

for (let num5_i; num5_i <= 30; num5_i++) {
  if (num5_i % 3 == 0) {
    console.log(num5_i);
  }
}

//* Create a loop to print the numbers from 10 to 0

for (let num6_i = 10; num6_i >= 0; num6_i--) {
  console.log(num6_i);
}

//* Create a loop to find the factorial of a number

let num7_num1 = 10;
let num7_fact = 1;

if (num7_num1 < 0) {
  console.log(`Your number is a negative number!`);
} else {
  for (num7_num1; num7_num1 > 1; num7_num1--) {
    num7_fact *= num7_num1;
  }
}

//* Create a loop to print the odd numbers from 1 to 20

for (let num8_i = 1; num8_i <= 20; num8_i++) {
  if (num8_i % 2 != 0) {
    console.log(num8_i);
  }
}

//* Create a loop to print the powers of 2 from 1 to 10

for (let num9_i = 1; num9_i <= 10; num9_i++) {
  console.log(num9_i * 2);
}
