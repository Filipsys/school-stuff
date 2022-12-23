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
  function randomColor() {
    const colors = ["red", "blue", "green", "purple", "gray"]
    const random = Math.floor(Math.random() * colors.length);

    return colors[random];
  }

  for (let number_i = 1; number_i <= number_divs; number_i++) {
    const div = document.createElement("div");

    div.style.backgroundColor = randomColor();
    div.style.width = "50px";
    div.style.height = "50px";

    document.body.appendChild(div);    
  }
  return "";
}


//* calculateTax - Calculates the tax for a given amount

const calculateTax = (amount, tax) => `Tax = ${(amount * tax) / 100}, from ${amount}`; 


//* getRandomItem - Picks a random item from a given array

function getRandomItem() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const random = Math.floor(Math.random() * numbers.length);

  return `Random number from an array: ${numbers[random]}`;
}


//* createEmailAddress - Generates a unique email address

function createEmailAddress() {
  const getRandomItem = () => Math.floor(Math.random() * 10) + 7;

  function getRandomSymbol() {
    const symbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
                     "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                     "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                     "u", "v", "w", "x", "y", "z", "$", "%", "_", "-"]
    const random = Math.floor(Math.random() * symbols.length);
  
    return symbols[random];
  }

  function getRandomMail() {
    const mails = ["gmail", "yopmail", "o2", "icloud"]
    const random = Math.floor(Math.random() * mails.length);
  
    return mails[random];
  }

  let empty_string = "";
  for (let i = 1; i <= getRandomItem(); i++) {
    empty_string += getRandomSymbol();
  }

  return empty_string += `@${getRandomMail()}.com`;
}
//* checkPalindrome - Checks if a given string is a palindrome

function checkPalindrome(palindrome) {
  let palindrome_rev = palindrome.split("").reverse().join("")

  if (palindrome == palindrome_rev) {
    return `${palindrome} (${palindrome_rev}) is a palindrome`
  } else {
    return `${palindrome} (${palindrome_rev}) is not a palindrome`
  }
}

//* getRandomColor - Generates a random color in hex code

function getRandomColor() {
  function getRandomIndex() {
    const index = ["1", "2", "3", "4", "5", "6", "7", "8", "9",
                   "0", "A", "B", "C", "D", "E", "F"]
    const random = Math.floor(Math.random() * index.length);
    
    return index[random];
  }
    let empty_string = "";
  
    for (let i = 1; i <= 6; i++) {
      empty_string += getRandomIndex();
    }
    return `#${empty_string}`
  }


//! ==========================================

document.addEventListener("DOMContentLoaded", function() {
  document.write(createRandomNumber());
  document.write("<br>");
  document.write(reverseString("olleh"));
  document.write("<br>");
  document.write(checkPrime(10));
  document.write("<br>");
  document.write(`P = ${calculateArea(4, 6)}<sup>2</sup>`);
  document.write("<br>");
  document.write(calculateTax(1000, 5));
  document.write("<br>");
  document.write(getRandomItem());
  document.write("<br>");
  document.write(createEmailAddress());
  document.write("<br>");
  document.write(checkPalindrome("racecar"));
  document.write("<br>");
  document.write(getRandomColor());
  document.write("<br>");
  document.write(createDivs(7));
});
