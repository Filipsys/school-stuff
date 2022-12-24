// class person {
//   constructor(name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.favColor = color;
//   }

//   changeName(newName) {
//     this.name = newName;
//   }
// }


// document.addEventListener("DOMContentLoaded", function () {
//   const person1 = new person("Daniel", 30, "blue");
//   console.log(person1.name);

//   person1.changeName("Dominic");
// });


//* A person object, with properties such as name, age, and address.

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}


//* A car object, with properties such as make, model, and year.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}


//* A book object, with properties such as title, author, and number of pages.

class Book {
  constructor(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
  }
}


//* A movie object, with properties such as title, director, and release date.

class Movie {
  constructor(title, director, releaseDate) {
    this.title = title;
    this.director = director;
    this.releaseDate = releaseDate;
  }
}


//* A product object, with properties such as name, price, and quantity in stock.

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}


//* A weather object, with properties such as location, temperature, humidity, and wind speed.

class Weather {
  constructor(location, temperature, humidity, windSpeed) {
    this.location = location
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }
}


//* A calculator object, with methods for performing basic math operations such as addition, subtraction, multiplication, and division.

class Calculator {
  constructor(number1, number2, operatorType) {
    this.number1 = number1;
    this.number2 = number2;
    this.operatorType = operatorType;
    
    if (operatorType == "+") {
      this.result = number1 + number2;
    } else if (operatorType == "-") {
      this.result = number1 - number2;
    } else if (operatorType == "*") {
      this.result = number1 * number2;
    } else if (operatorType == "/") {
      this.result = number1 / number2;
    }
  }
}


//* A student object, with properties such as name, grade level, and GPA.

class Student {
  constructor(name, gradeLevel, GPA) {
    this.name = name;
    this.gradeLevel = gradeLevel;
    this.GPA = GPA;
  }
}


//* A recipe object, with properties such as name, ingredients, and instructions.

class Recipe {
  constructor(name, ingredients, instructions) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const person1 = new Person("Daniel", 30, "blue");
  const person2 = new Person("Jane", 24, "red");

  const car1 = new Car("Audi", "A5", 2002);
  const car2 = new Car("Tesla", "B-T 25", 2015);

  const book1 = new Book("Harry Potter", "JK Rowling", 349);
  const book2 = new Book("Diary of a Wimpy Kid", "Jeff Kinney", 138);

  const movie1 = new Movie("Jurrasic Park", "N/A", 2014);
  const movie2 = new Movie("Avatar 2", "N/A", 2022);

  const product1 = new Product("Tomato Sauce", 5.99, 163);
  const product2 = new Product("Kitkat Bar", 1.99, 258);

  const weather1 = new Weather("Przemyśl", "5°C", "80%", "24km/h");
  const weather2 = new Weather("Paris", "16°C", "80%", "24km/h");

  const calculation1 = new Calculator(13, 10, "+");
  const calculation2 = new Calculator(13, 10, "-");
  const calculation3 = new Calculator(13, 10, "*");
  const calculation4 = new Calculator(13, 10, "/");

  const student1 = new Student("Alex", "A", 4.0);
  const student2 = new Student("Stephanie", "E+", 2.0);

  const recipe1 = new Recipe("Spagetti", ["Pasta", "Tomato Sauce", "Chicken Meat"], "1. Cook pasta and meat, 2. Mix together and heat up.");
  const recipe2 = new Recipe("Cookies", ["Wheat", "Sugar", "Eggs", "Chocolate"], "1. Mix all, 2. Bake in the oven.")


  console.log(person1);
  console.log(person2);
  
  console.log(car1);
  console.log(car2);

  console.log(book1);
  console.log(book2);

  console.log(movie1);
  console.log(movie2);

  console.log(product1);
  console.log(product2);

  console.log(weather1);
  console.log(weather2);

  console.log(calculation1.result);
  console.log(calculation2.result);
  console.log(calculation3.result);
  console.log(calculation4.result);

  console.log(student1);
  console.log(student2);

  console.log(recipe1);
  console.log(recipe2);
});
