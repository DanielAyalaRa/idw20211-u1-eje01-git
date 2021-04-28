function FirstReverse(str) { 

  // code goes here
  var nuevo = "";
  for(let i = str.length ; i >=0 ; i--){
      nuevo = nuevo + str.charAt(i);
  }
  str = nuevo;
  return str; 

}
   
// keep this function call here 
console.log(FirstReverse("I Love Code"));