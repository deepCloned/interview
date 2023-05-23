// 定义一个Person类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  }
}

// 定义一个Student类，继承自Person类
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`I'm studying in grade ${this.grade}.`);
  }
  sayMyselfHello() {
    super.sayHello()
    console.log('xixi')
  }
}

// 创建一个Person对象
const person = new Person("Tom", 20);
person.sayHello(); // 输出：Hello, my name is Tom, I'm 20 years old.

// 创建一个Student对象
const student = new Student("Jerry", 18, 10);
student.sayHello(); // 输出：Hello, my name is Jerry, I'm 18 years old.
student.study(); // 输出：I'm studying in grade 10.
student.sayMyselfHello()