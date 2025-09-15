//static = static members belong to the class itself,
//          not to instances of the class

// class MathUtil {
//   static PI = 3.14159;

//   static getDaimeter(radius) {
//     return 2 * radius * 2;
//   }

//   static getCircumference(radius) {
//     return 2 * MathUtil.PI * radius;
//   }

//   static getArea(radius) {
//     return MathUtil.PI * radius * radius;
//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDaimeter(5));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));


class User{
  static count = 0;

  constructor(username){

    this.username = username;
    User.count++;
  }

  static getCount(){
    console.log(`We have ${User.count} users`);
  }
    
  sayHello(){
    console.log(`Hello ${this.username}`);
  }
}

const u1 = new User('john');
const u2 = new User('jane');
const u3 = new User('peter');

// console.log(u1.username);
// console.log(u2.username);
// console.log(u3.username);

u1.sayHello();
u2.sayHello();
u3.sayHello();

console.log(User.count);
User.getCount();

