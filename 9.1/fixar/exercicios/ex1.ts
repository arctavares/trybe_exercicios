class student {
    private _registration: string;
    private _name: string;
    private _exam: number[];
    private _courseWork: number[];

    constructor(registration: string, name: string) {
        this._registration = registration;
        this._name = name;
        this._exam = [];
        this._courseWork = [];
    }

    get registration(): string {
        return this._registration;
    }

    set registration(newValue: string) {
        this._registration = newValue;
    }

    get name(): string {
        return this._name;
    }

    set name(newValue: string) {
        if(newValue.length < 3) {
            throw new Error('Invalid name provided');
        }
        this._name = newValue;
    }

    get exam(): number[] {
        return this._exam;
    }

    set exam(newValue: number[]) {
        if(newValue.length < 4) {
            throw new Error('The student person can only have four exam grades');
        }
        this._exam = newValue;
    }

    get courseWork(): number[] {
        return this._courseWork;
    }

    set courseWork(newValue: number[]){
        if(newValue.length < 2){
            throw new Error('The student person can only have two course work grades');
        }
        this._courseWork = newValue;
    }

    sumExamGrades(): number {
        return [...this._exam, ...this._courseWork].reduce((previousGrade, grade) => {
            const nextGrade = grade + previousGrade;
            return nextGrade;
        }, 0);
    }

    sumAverageGrade(): number {
        const sumGrades = this.sumExamGrades();
        const gradeLength = this.exam.length + this.courseWork.length;
        return Math.round(sumGrades / gradeLength);
    }
}

const personOne = new student('2542234', 'Alberto');

personOne.exam = [25, 20, 23, 23];

personOne.courseWork = [45, 45];

console.log(personOne);

console.log('Soma de todas as notas: ', personOne.sumExamGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());

const personTwo = new student('432344', 'Ricardo');

console.log(personTwo);