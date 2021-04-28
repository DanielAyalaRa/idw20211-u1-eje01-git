function BracketMatcher(str) {
  let contar = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "("){
      contar++;
    } 
    if (str[i] === ")"){
      contar--;
    } 
    if (contar < 0) {
      return 0;
    }
  }

  if (!contar == 0){
    return 0;
  }else{
    return 1;
  }
}
   
console.log(BracketMatcher("(c(oder)) b(yte)"));