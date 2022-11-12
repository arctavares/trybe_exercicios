class Student {
    private _matricula: string;
    private _nome:string;
    private _provas: number[];
    private _trabalhos: number[];

    constructor(matricula: string, nome: string) {
     this._matricula = matricula;
     this._nome = nome;
     this._provas = [];
     this._trabalhos = [];   
    }


    get matricula(): string {
        return this._matricula;
    }

    set matricula(valor: string) {
        this._matricula = valor;
    }

    get name(): string {
        return this._nome;
    }

    set name(valor: string){
        if(valor.length < 3) {
            throw new Error('O nome deve conter no minimo 3 caracteres');
        }
        this._nome = valor;
    }

    get provas(): number[] {
        return this._provas;
    }

    set provas(valor: number[]){
        if(valor.length > 4) {
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas');
        }
        this._provas = valor;
    } 

    get trabalhos(): number[] {
        return this._trabalhos;
      }
    
      set trabalhos(value: number[]) {
        if (value.length > 2) {
          throw new Error(
            'A pessoa estudante só pode possuir 2 notas de trabalhos.',
          );
        }
    
        this._trabalhos = value;
      }
}

const personOne = new Student('202001011', 'Maria da Silva');
personOne.provas = [1,2,3,4];
console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo);