interface MyInterface {
    myNumber: number;
    myFunc(myParam: number): string;
}

class myClass implements MyInterface {
    constructor(public myNumber: number){}
    myFunc(myParam: number): string {
        return `myNumber + myParam: ${this.myNumber + myParam}`;
    }
}

const myObject = new myClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));