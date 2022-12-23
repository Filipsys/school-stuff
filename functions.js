//* FUNCTIONS (for multiple use)

function createDiv(name, bg_color, width, height) {
  const div = document.createElement(name);

  div.style.backgroundColor = bg_color;
  div.style.width = `${width}px`;
  div.style.height = `${height}px`;

  return document.body.appendChild(div);   
}


//! ================================================================================


//* createRandomNumber - Generates a random number between 0 and 1000

function createRandomNumber() {
  return `Random number from 1 to 1000: ${Math.floor(Math.random() * 1000) + 1}`;
}


//* reverseString - Reverses a given string

function reverseString(reversed) {
  return reversed.split("").reverse().join("");
}


//* checkPrime - Checks if a given number is prime

function checkPrime(number) {
  let factorial = 0;

  if (number <= 0) {
    return `A prime number cannot be equal to 0`;
  }
  for (let number_i = 2; number_i <= number; number_i++) {
    if (number % number_i == 0) factorial++;

    if (factorial > 2) {
      return `${number} is not a prime number!`;
    }
  }

  return `${number} is a prime number!`;
}


//* calculateArea - Calculates the area of a given shape

const calculateArea = (side_a, side_b) => `${side_a * side_b}`; 


//* createDivs - Creates a given number of divs on a page

function createDivs(number_divs) {
  let rand_color = getRandomColor();

  for (let number_i = 1; number_i <= number_divs; number_i++) {
    createDiv("div", rand_color, 50, 50); 
  }
  return "";
}


//* calculateTax - Calculates the tax for a given amount

const calculateTax = (amount, tax) => `Tax = ${(amount * tax) / 100}, from ${amount}`; 


//* getRandomItem - Picks a random item from a given array

function getRandomItem() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return `Random number from an array: ${numbers[(Math.floor(Math.random() * numbers.length))]}`;
}


//* createEmailAddress - Generates a unique email address

function createEmailAddress() {
  let empty_string = "";

  function getRandomSymbol() {
    const symbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
                     "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                     "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                     "u", "v", "w", "x", "y", "z", "$", "&", "_", "-"];
  
    return symbols[(Math.floor(Math.random() * symbols.length))];
  }

  function getRandomMail() {
    const mails = ["gmail", "yopmail", "o2", "icloud"];
  
    return mails[(Math.floor(Math.random() * mails.length))];
  }

  for (let i = 1; i <= Math.floor(Math.random() * 10) + 7; i++) {
    empty_string += getRandomSymbol();
  }

  return empty_string += `@${getRandomMail()}.com`;
}


//* checkPalindrome - Checks if a given string is a palindrome

function checkPalindrome(palindrome) {
  let palindrome_rev = palindrome.split("").reverse().join("");

  if (palindrome == palindrome_rev) {
    return `${palindrome} (${palindrome_rev}) is a palindrome`;
  } else {
    return `${palindrome} (${palindrome_rev}) is not a palindrome`;
  }
}


//* getRandomColor - Generates a random color in hex code

function getRandomColor() {
  function getRandomIndex() {
    const index = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"];
    
    return index[(Math.floor(Math.random() * index.length))];
  }
    let empty_string = "";
  
    for (let i = 1; i <= 6; i++) {
      empty_string += getRandomIndex();
    }

    return `#${empty_string}`;
  }


//! ==========================================


document.addEventListener("DOMContentLoaded", function() {
  document.write(`${createRandomNumber()}<br>`);
  document.write(`${reverseString("olleh")}<br>`);
  document.write(`${checkPrime(10)}<br>`);
  document.write(`${calculateArea(4, 6)}<sup>2</sup><br>`);
  document.write(`${calculateTax(1000, 5)}<br>`);
  document.write(`${getRandomItem()}<br>`);
  document.write(`${createEmailAddress()}<br>`);
  document.write(`${checkPalindrome("racecar")}<br>`);
  document.write(`${getRandomColor()}<br>`);
  document.write(`${createDivs(7)}`);
});
