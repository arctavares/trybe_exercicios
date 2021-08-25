const salarioBruto = 3000;
let salarioBase;
let salarioLiquido;

if(salarioBruto <= 1556.94){
    salarioBase = salarioBruto - (salarioBruto * 0.08);
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto * 0.09);
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto * 0.11);
}else if(salarioBruto >= 5189.82){
    salarioBase = salarioBruto - (salarioBruto - 570.88);
}

if(salarioBase <= 1903.89){
    salarioLiquido = salarioBase;
}else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    let alicota = (salarioBase * 0.075) - 142.80;
    salarioLiquido = salarioBase - alicota;
}else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    let alicota = (salarioBase * 0.15) - 354.80;
    salarioLiquido = salarioBase - alicota;
}else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    let alicota = (salarioBase * 0.225) - 636.13;
    salarioLiquido = salarioBase - alicota;
}else if(salarioBase >= 4664.68){
    let alicota = (salarioBase * 0.275) - 869.36;
    salarioLiquido = salarioBase - alicota;
}


console.log(salarioLiquido)