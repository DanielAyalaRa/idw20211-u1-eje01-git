function FindIntersection(strArr) { 
    // code goes here  
    var cad01 = strArr[0].split(",");
    var cad02 = strArr[1].split(",");
    var n1 = cad01.length;
    var n2 = cad02.length;
    var array = "";

    for(let i=0; i < n1; i++){
      for(let j=0; j < n2; j++){
        if(cad01[i] === cad02[j]){
          array = array + cad02[j]+",";
        }
      }
    }
    array = array.slice(0,-1);
    array = array.replace(" ","");
    array = array.replace(" ","");
    
    return array; 
    
}
     
// keep this function call here 
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));