// FUNÇÕES

function saudacao() {
  console.log('Olá, seja bem-vindo ao Curso!')
}
saudacao()

console.clear()

// Como enviar parâmetros para as funções

function saudacao(nome, curso = 'JavaScript') {
  console.log(`Olá ${nome}! Seja bem-vindo ao Curso de ${curso}!`)
}
saudacao('Cristiano') 

// Retorno da Função

function soma(num1, num2) {
  console.log('Qualquer coisa')
  return num1 + num2
}
let resultado = soma(10, 20)
console.log(resultado / 2)

function maiorQue50(num) {
  
  if (num > 50) {
    return true
  }
  return false
}
