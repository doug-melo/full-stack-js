
const idade = prompt("Informe sua idade:")

/*
    desta forma o codigo fica dificil de leitura!!

if (idade > 18){
    alert("Você é maior de idade.")
}else{
    alert("Você é menor de idade.")
    if (idade < 12){
        alert("Você é criança.")
        if(idade < 4){
         alert("você é bebê.")
        }
    }
}
*/

/*
    Desta forma o codigo fica mais simples para leitura.
 */
if (idade > 18){
    alert("Você é maior de idade.")
} else if (idade > 12){
    alert("Você é menor de idade.")
} else if(idade > 4){
    alert("Você é criança.")
} else{
    alert("...")
}

/* 
    sintaxe mais simples:
    Forma abreviada e autoavaliada do IF ELSE
    ? === IF
    : === ELSE
 */

    const resultado = (6 === 6) ? "Vedadeiro" : "Falso"
    console.log(resultado)

