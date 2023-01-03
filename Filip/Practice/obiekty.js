//* A person object, with properties such as name, age, and address.

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  greet() {
    return `Hello! I'm ${this.name}, I'm ${this.age} and I live on ${this.address}.`;
  }
}


//* A car object, with properties such as make, model, and year.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  about() {
    return `Make: ${this.make}, model: ${this.model}, year of production: ${this.year}`;
  }
}


//* A book object, with properties such as title, author, and number of pages.

class Book {
  constructor(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
  }

  description() {
    return `Book: ${this.title} by ${this.author}. Pages: ${this.numberOfPages}`;
  }
}


//* A movie object, with properties such as title, director, and release date.

class Movie {
  constructor(title, director, releaseDate) {
    this.title = title;
    this.director = director;
    this.releaseDate = releaseDate;
  }

  description() {
    return `Movie title: ${this.title}, Director: ${this.director}, released in ${this.releaseDate}`;
  }
}


//* A product object, with properties such as name, price, and quantity in stock.

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  description() {
    return `${this.name} costs ${this.price}, quantity: ${this.quantity}`;
  }
}


//* A weather object, with properties such as location, temperature, humidity, and wind speed.

class Weather {
  constructor(location, temperature, humidity, windSpeed) {
    this.location = location;
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }

  type() {
    return `${this.temperature} at ${this.location} with the humidity of ${this.humidity} and wind speed at ${this.windSpeed}`;
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

  results() {
    return `${this.number1} ${this.operatorType} ${this.number2} = ${this.result}`;
  }
}


//* A student object, with properties such as name, grade level, and GPA.

class Student {
  constructor(name, gradeLevel, GPA) {
    this.name = name;
    this.gradeLevel = gradeLevel;
    this.GPA = GPA;
  }

  studentData() {
    return `${this.name} has a grade level of ${this.gradeLevel} with the GPA of ${this.GPA}`;
  }
}


//* A recipe object, with properties such as name, ingredients, and instructions.

class Recipe {
  constructor(name, ingredients, instructions) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  recipeData() {
    return `${this.name}. ${this.ingredients}. ${this.instructions}`;
  }
}


//* A shopping list object, with properties such as items needed and their quantities, and methods for adding and removing items from the list.

class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item, quantity) {
    this.items.push({
      item: item,
      quantity: quantity
    });
  }

  removeItem(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].item == item) {
        this.items.splice(i, 1);
      }
    }
  }

  shoppingData() {
    let empty_string = "";

    for (let i = 0; i <= this.items; i++) {
      empty_string += `${this.items[i].item} - ${this.items[i].quantity} | `;
    }
    return `${empty_string}`;
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const person1 = new Person("Daniel", 30, "123 Main Street");
  const person2 = new Person("Jane", 24, "47 Bolton Road");

  const car1 = new Car("Audi", "A5", 2002);
  const car2 = new Car("Tesla", "B-T 25", 2015);

  const book1 = new Book("Harry Potter", "JK Rowling", 349);
  const book2 = new Book("Diary of a Wimpy Kid", "Jeff Kinney", 138);

  const movie1 = new Movie("Jurrasic Park", "Steven Spielberg, Kathleen Kennedy, Gerald R. Molen", 2014);
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
  const recipe2 = new Recipe("Cookies", ["Wheat", "Sugar", "Eggs", "Chocolate"], "1. Mix all, 2. Bake in the oven.");

  const shopping1 = new ShoppingList();
  shopping1.addItem("Flour", 3);
  shopping1.addItem("Apples", 2);
  shopping1.removeItem("Flour", 1);


  document.write(`${person1.greet()}<br>`);
  document.write(`${person2.greet()}<br><br>`);
  document.write(`${car1.about()}<br>`);
  document.write(`${car2.about()}<br><br>`);
  document.write(`${book1.description()}<br>`);
  document.write(`${book2.description()}<br><br>`);
  document.write(`${movie1.description()}<br>`);
  document.write(`${movie2.description()}<br><br>`);
  document.write(`${product1.description()}<br>`);
  document.write(`${product2.description()}<br><br>`);
  document.write(`${weather1.type()}<br>`);
  document.write(`${weather2.type()}<br><br>`);
  document.write(`${calculation1.results()}<br>`);
  document.write(`${calculation2.results()}<br>`);
  document.write(`${calculation3.results()}<br>`);
  document.write(`${calculation4.results()}<br><br>`);
  document.write(`${student1.studentData()}<br>`);
  document.write(`${student2.studentData()}<br><br>`);
  document.write(`${recipe1.recipeData()}<br>`);
  document.write(`${recipe2.recipeData()}<br><br>`);
  document.write(`${shopping1.shoppingData()}`);
});
