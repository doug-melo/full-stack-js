//Depois de criar o script, vamos começar obtendo os dois números usando o prompt:

const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

//Com os números vamos calcular os resultados das 4 operações:

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

//Por fim, vamos exibir os resultados na tela de forma organizada:

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
  )