let n = 17;
let total = 0;

for(i = 1; i <= n; i += 1){
    if(n % i == 0){
        total += 1;
    }
    if(n == 1){
        total += 1;
    }
}

if(total > 2){
    console.log('Não é numero primo!');
}else{
    console.log('É numero primo!');
}