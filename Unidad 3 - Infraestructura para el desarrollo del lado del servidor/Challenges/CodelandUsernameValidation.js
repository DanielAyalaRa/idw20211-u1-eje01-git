function CodelandUsernameValidation(str) { 
  // code goes here
  var n = str.length;
  var exp = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
  var v = true;
  if(n >= 4 && n <= 24){
    if(exp.test(str)){
        v = true;
    }else {
        v = false;
    }
  }else {
    v = false;
  }
  return v; 

}
   
// keep this function call here 
console.log(CodelandUsernameValidation("u__hello_world123"));