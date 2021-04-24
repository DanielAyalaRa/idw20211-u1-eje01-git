function palindromo(cadena){
    //ponemos en minusculas la cadena
    var cad = cadena.toLowerCase();
    //Separar palabras por medio del split
    var separar = cad.split(" ");
    //Contar numero de palabras
    var nPalabras = separar.length;
    //Eliminamos los espacios en blanco con el replace
    var nuevaCad = cad.replace(/ /g,"");
    //Numero de vocales
    var vocales = nuevaCad.match(/[aeiou]/gi).length;
    //Numero de vocales
    var consonantes = nuevaCad.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length;
    //Obtenemos el numero de letras de la cadena sin espacio
    var n = nuevaCad.length;
    //validacion de palindromo 
    var igual = true;
    //inicio de la cadena
    var i = 0;
    //final al inicio de la cadena
    var j = n-1;
    
    while (i <= n){
        if (nuevaCad.charAt(i) == nuevaCad.charAt(j)){
            //todo bien
        }
        else{
            igual = false;
            break;
        }
        if(j<=0){
            break;
        }
        /*Incrementamos y decrementamos variables
          para mover de posicion la cadena*/
        i++;
        j--;
    }//Validacion

    //Imprimimos resultados
    if (igual == true){
        console.log("Cadena: " + cadena + "\n"
                    +"Si es palindromo \n"
                    +"Número de palabras: " + nPalabras + "\n"
                    +"Número de letras: " + n + "\n"
                    +"Número de vocales: " + vocales + "\n"
                    +"Número de consonantes: " + consonantes + "\n"
                    );
    }else{
        console.log("Cadena: " + cadena + "\n"
                    +"No es palindromo \n"
                    +"Número de palabras: " + nPalabras + "\n"
                    +"Número de letras: " + n + "\n"
                    +"Número de vocales: " + vocales + "\n"
                    +"Número de consonantes: " + consonantes + "\n"
                    );
    }
}

function principal(cad){
    palindromo(cad);
}

module.exports.principal = principal;