// criar o script e começar obtendo as informações do recruta usando o prompt:

const primeiroNome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?")

//E então exibimos essas informações usando o alert e ajustando o texto do nome completo e calculando a idade baseada no ano:

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2024 - anoDeNascimento)
  )