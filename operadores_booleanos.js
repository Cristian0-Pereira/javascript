// > OPERADORES BOOLEANOS

// Igualdade:        == (ou ===)
// Desilgualdade:    != (ou !==)
// Maior que:        >
// Maior ou igual:   >=
// Menor que:        <
// Menor ou igual:   <=

const numero = 10
console.log(numero == 10)
console.log(numero < 20)
console.log(10 == '10')
console.log(10 === '10') // pra comparar tipos e conteúdo, sempre usar 3 iguais.

console.clear()  // pra limpar no terminal daqui pra cima.

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10') // sempre usar esse.

// - Conjunçoes Lógicas

// AND => &&

let idade = 26
let tenhoCNH = true
const possoDirigir = idade >= 18 && tenhoCNH === true
console.log('Posso dirigir?', possoDirigir)

// OR  => ||

idade = 40
const votoFacultativo = idade < 18 || idade >= 70

// NOT => !
const cursoBom = false
console.log(!cursoBom)  // Inverte o resultado.