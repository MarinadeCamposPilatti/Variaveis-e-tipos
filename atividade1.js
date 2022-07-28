function palindromo1(palindromo1){
    let confirma = "não"
    if(palindromo1 === palindromo1.split("").reverse().join()){
        confirma = ""
    }
    console.log(`${palindromo1} ${confirma} é um palíndromo.`)
}

palindromo1("ana")

function palindromo2(palindromo2){
    let newString = " ";
    for (var i = palindromo2.length - 1; i >= 0; i--) {
        newString += palindromo2[i];}
    let confirma2 = "não"
    if(newString === palindromo2){
        confirma2 = ""
    }
    console.log(`${palindromo2} ${confirma2} é um palíndromo.`)
}

palindromo2("arara")