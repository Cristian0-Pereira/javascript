// COERÇÃO (CONVERSÃO) DE TIPOS

// -1. Coerção Ecplícita (Manual)
const numero = 10
console.log(numero, typeof numero)

const numeroParaString = String(numero) // Com letra Maiúcula.
console.log(numeroParaString, typeof numeroParaString)

console.log(Number('10')) // Sempre usar number.
console.log(parseFloat('12311.1231'))
console.log(parseInt('12312.1231')) // Esse vai truncar o número.
console.log(Boolean(1123)) // Somento o 0 q vai ser false.


// -2. Coerção Implícita (Automática)
console.log(10 + '1') // sempre vai transformar em texto, somente na soma.
console.log('10' - 1) // na subtração o js entende como numero.
console.log('10' * 3)
console.clear()

let n = 1 + '1' // texto '11'
n = n - 1       // ele entende como conta pq é subtração.
console.log(n)
console.log(2 + 3 + 4 + '5')
console.log('5' + 2 + 3 + 4)
console.log('10' - '4' - '3' - 2 + '5')