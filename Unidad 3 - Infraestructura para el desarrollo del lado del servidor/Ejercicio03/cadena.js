function palindromo(cadena){
    var cad = cadena.toLowerCase();
    var sinEspacio = cad.replace(" ","");

    var n = sinEspacio.length;
    var cad_1 = sinEspacio;
    var cad_2 = sinEspacio; 
    var igual = true;

    var i = 0;
    var j = n-1;

    while (i <= n){
        if (cad_1.charAt(i) == cad_2.charAt(j)){
            //Todo bien
        }
        else{
            igual = false;
            break;
        }
        if(j<=0){
            break;
        }
        i++;
        j--;
    }//Validacion
    if (igual == true){
        console.log("Si es palindromo");
    }else{
        console.log("No es palindromo");
    }
}

function principal(cad){
    palindromo(cad);
}

module.exports.principal = principal;