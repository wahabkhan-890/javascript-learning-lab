class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("name:", this.name);
        console.log("age:", this.age);
    }
}

class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }

    study() {
        console.log(
            "name is:", this.name,
            "roll number is:", this.rollNumber
        );
    }
}