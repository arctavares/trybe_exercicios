class Person {
    constructor(public _name: string, public _birthDate: Date) {
        this.name = _name;
        this.birthDate = _birthDate;
    }
    get name(): string {
        return this._name;
    }

    set name(n: string) {
        if(n.length < 3) {
            throw new Error('O nome deve ter no minimo 3 caracteres');
        }
        this._name = n;    
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    static getAge(value: Date): number {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
  }


    set birthDate(d: Date) {
        if(d.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser no futuro');
        if(Person.getAge(d) > 120) throw new Error('A pessoa deve ter no maximo 120 anos');
        this._birthDate = d;
    }
 }

 const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
 const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));
 
 console.log(maria);
 console.log(luiza);