function LongestWord(sen) { 

  // code goes here
  sen = sen.trim();
  sen = sen.replace(/[.*+?^&!$;%@#<>{}()|[\]\\]/g,"");  
  sen = sen.split(" ");

  var mayor = 0;
  sen.forEach(i => {
    if(mayor < i.length){
      mayor = i.length;
      sen = i;
    }
  });

  return sen; 

}
   
// keep this function call here 
console.log(LongestWord("I love dogs"));