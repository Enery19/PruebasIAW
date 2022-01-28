function factorial (num){
    let fact=1;
    for (let i=num; i>0; i--){
        fact*=i;
    }
    return fact;
}

function factorial_recursivo (numero){

    if (numero==0)
        return 1;
    else
        factorial_recursivo(numero*numero-1);
}