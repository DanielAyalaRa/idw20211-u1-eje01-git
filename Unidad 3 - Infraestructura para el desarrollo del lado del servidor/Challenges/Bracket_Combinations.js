function BracketCombinations(num) { 
    // code goes here
    //formula para determinar numero de combinaciones
    num = (1/(num+1))*(factorial(num*2)/(factorial(num)*factorial((num*2)-(num))));
    return num; 
}
  
function factorial(n){
    var res = 1; 
    for (i=1; i<=n; i++) {
        res = res * i; 
    }
    return res; 
}
     
// keep this function call here 
console.log(BracketCombinations(readline()));