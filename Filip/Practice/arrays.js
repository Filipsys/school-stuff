//* Create an array of your favorite foods and loop through the array to print each item to the console.

function favoriteFoodLoop(array) {
  for (const element of array) {
    console.log(element);
  }
}


//* Create an array of numbers and use the sort method to sort the numbers in ascending or descending order.

function sortNumbers(array) {
  console.log(array.sort((a, b) => a - b));
  console.log(array.sort((a, b) => b - a));
}


//* Create an array of objects, each representing a person with properties such as name and age, and use the filter method to create a new array of only people over a certain age.

function objectsList() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const person1 = new Person("John", 35);
  const person2 = new Person("Maria", 29);
  const person3 = new Person("Derek", 38);

  const array = [person1, person2, person3];

  console.log(array.filter(person => person.age >= 30));
};


//* Use the map method to create a new array of objects that includes only a certain property from the original array of objects.

function objectsMap() {
  class ObjectsList {
    constructor(name, age, hobby) {
      this.name = name;
      this.age = age;
      this.hobby = hobby;
    }
  }

  const person1 = new ObjectsList("John", 35, "Gaming");
  const person2 = new ObjectsList("Maria", 29, "Racing");
  const person3 = new ObjectsList("Derek", 38, "Cleaning");

  const array = [person1, person2, person3]

  console.log(array.map(person => person.hobby.toUpperCase() == "GAMING"));
}


//* Use the reduce method to sum all the numbers in an array of numbers.

function reduceMethod(array) {
  console.log(array.reduce((a, b) => a + b));
}


//* Use the some method to check if any element in an array meets a certain condition.

function someMethod(array) {
  console.log(array.some(element => element > 5));
}


//* Use the every method to check if all elements in an array meet a certain condition.

function everyMethod(array) {
  console.log(array.every(element => element > 5));
}


//* Use the indexOf method to find the index of a certain element in an array.

function indexOfMethod(array) {
  console.log(array.indexOf(5));
}


//* Use the includes method to check if an array includes a certain element.

function includesMethod(array) {
  console.log(array.includes(5));
}


//* Use the push and pop methods to add and remove elements from the end of an array.

function pushPopMethod(array) {
  array.push(7);
  array.pop();

  console.log(array);
}


document.addEventListener("DOMContentLoaded", function () {
  favoriteFoodLoop(["Spagetti", "Lasagna", "food3", "food4"]);
  sortNumbers([1, 4, 3, 23, 3, 9, 26]);
  objectsList();
  objectsMap();
  reduceMethod([1, 2, 3, 4, 5, 6]);
  someMethod([1, 2, 3, 4, 5, 6]);
  everyMethod([1, 2, 3, 4, 5, 6]);
  indexOfMethod([1, 2, 3, 4, 5, 6]);
  includesMethod([1, 2, 3, 4, 5, 6]);
  pushPopMethod([1, 2, 3, 4, 5, 6]);
});
