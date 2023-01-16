
// ex1

abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;
}

// ex2

class MeleeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    }
    talk(): void {
        console.log(`Hi, i am ${this._name}, i attack at close range`);
    }
    specialMove(): void {
        console.log(`My special move is ${this._specialMoveName}`);
    }
}

// ex3

class LongRangeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    }
    talk(): void {
        console.log(`Hi, i am ${this._name}, i attack at longe range`);
    }
    specialMove(): void {
        console.log(`My special move is ${this._specialMoveName}`);
    }
}

// ex4

function characterPresentation(character: Character) {
    character.talk();
    character.specialMove();
}

const yoshi = new MeleeCharacter('yoshi', 'Super dragon');

characterPresentation(yoshi);