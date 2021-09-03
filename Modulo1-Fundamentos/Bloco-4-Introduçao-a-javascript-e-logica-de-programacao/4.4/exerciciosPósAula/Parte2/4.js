function highestCharName(names){
    index = 0;

    for(let i = 0; i < names.length; i += 1){
        if(names[i].length >= names[index].length){
            index = i;
        }
    }

    return names[index];
};

names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(highestCharName(names));
