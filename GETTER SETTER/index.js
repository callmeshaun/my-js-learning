// getter = special method that gets the value of a property readable
// setter = special method that sets the value of a property writable

//variable and modify a value when reading or writing a property

// class Reactangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newwidth) {
//     if (newwidth > 0) {
//       this._width = newwidth;
//     } else {
//       console.error("Width must be positive");
//     }
//   }

//   set height(newheight) {
//     if (newheight > 0) {
//       this._height = newheight;
//     } else {
//       console.error("Height must be positive");
//     }
//   }

//   get width() {
//     return this._width.toFixed(1);
//   }

//   get height() {
//     return this._height.toFixed(1);
//   }

//   get area() {
//     return (this._width * this._height).toFixed(1);
//   }

// }

// const rectangle = new Reactangle(3, 4);

// rectangle.width = 5
// rectangle.height = 10
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  set firstname(newfirstname) {
    if (typeof newfirstname === "string" && newfirstname.length >= 0) {
      this._firstname = newfirstname;
    } else {
      console.error("Not a valid name");
    }
  }

  set lastname(newlastname) {
    if (typeof newlastname === "string" && newlastname.length >= 0) {
      this._lastname = newlastname;
    } else {
      console.error("Not a valid lastname");
    }
  }

  set age(newage) {
    if (typeof newage === "number" && newage >= 0) {
      this._age = newage;
    } else {
      console.error("Not a valid age");
    }
  }

  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get age() {
    return this._age;
  }

  get fullname() {
    return `${this._firstname} ${this._lastname}`;
  }
}

const person = new Person("John", "Doe", 25);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname);
console.log(person.age);
