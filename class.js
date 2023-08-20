// this
// This always referes to the immediate parent object
const familyObject = {
  name: "Akash",
  father: {
    name: "Sanjay",
    getName: function () {
      console.log(this.name);
    },
  },
  getName: function () {
    console.log(this.name); // family Object immediate parent
  },
};

familyObject.getName();
familyObject.father.getName();

////////////////////////////////////////////////////
// Factory function
function createPerson(name, desgination, age) {
  return {
    name,
    desgination,
    age,
    getName: function () {
      console.log("hi there my name is", name);
    },
  };
}

// appoint person

const sanjay = createPerson("sanjay", "Engineer", 25);
const vinoth = createPerson("sanjay", "IT-Expert", 21);
const paraksh = createPerson("sanjay", "Sys-admin", 22);
sanjay.getName();

// Constructor function
// encapsulation
function Person(name, desgination, age, salary) {
  // create an objet called this = {}
  // const this = {};
  // this.name = "sanjay";

  this.name = name;
  this.desgination = desgination;
  this.age = age;
  this.salary = salary;
  // abstraction
  let bonus = 10000;
  this.bonusDetails = function () {
    console.log("The bonus details", bonus);
    return bonus;
  };
  this.info = function () {
    console.log(`
    Person Name is ${this.name}
    Age is ${this.age}
    designation is ${this.desgination}
    `);

    this.annaulIncome = function () {
      console.log(
        "Annual Income of the employee is ",
        this.salary * 12 + bonus
      );
    };
    Object.defineProperty(this, "bonus", {
      get function() {
        return bonus;
      },
      set function(value) {
        bonus = value;
      },
    });
  };
  //   return the this {}
}

const person1 = new Person("sanjay", "Engineer", 25, 700000);
const person2 = new Person("prakash", "sys-admin", 22, 700000);
console.log(person1);
person1.info();
person1.annaulIncome();
person2.bonusDetails();

person2.bonus = 1000000000;
console.log(person1);
person2.info();
person2.annaulIncome();
console.log(person2);

class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log("hi my name is ", this.name);
  }
}

class Manager extends Employee {
  constructor(name, age, team) {
    super(name, age);
    this.team = team;
  }
  myTeam() {
    console.log("My team size is ", this.team, "and my name is ", this.name);
  }
  mangerGreetings() {
    console.log(this);
    super.greeting();
  }
}

const employee1 = new Employee("poojith", 32);
employee1.greeting();

const manager1 = new Manager("Guna", 34, 50);
manager1.myTeam();
manager1.mangerGreetings();
