// > ARRAYS

// - Como criar um array?
let arr = ['Cristiano', 40, 1.78, true]
console.log(arr)

// - Como acessar os elementos do array?
console.log('Primeiro', arr[0])
console.log('Segundo', arr[1])
console.log('Terceiro', arr[2])
console.log('Quarto', arr[3])

// - Como obter o tamanho do array
console.log('Tamanho do array:',arr.length)

// - Percorrendo arrays

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

for (let elemento of arr) {
  console.log(elemento)
}
console.clear()

for (let indice in arr) {
  console.log(indice, arr[indice])
}