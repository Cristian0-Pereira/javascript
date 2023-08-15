// > ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: slice
console.log(arr1.slice(1,3))
console.log(arr1[0])

// Adcionando elementos: push | unshift
console.log('Antes de adicionar: ', arr2)
arr2.push(10, 20, 30) // push joga pro final.
arr2.push(40)
arr2.unshift(5) // unshift joga pro começo.
console.log('Depois de adicionar: ', arr2)

// Removendo elementos: pop | shift
console.log('Antes de remover com pop:', arr2)
const elementoRemovido = arr2.pop() // pop remove o ultimo elemento e retorna o elemento removido.
console.log('Depois de remover com pop:', arr2)
console.log('O elemento removido foi:', elementoRemovido)

console.log('Antes de remover com shift:', arr2)
arr2.shift() // shift remove o primeiro elemento.
console.log('Depois de remover com shift:', arr2)

// Concatenando arrays: cancat
console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

// Buscando elementos: indexOf | lastIndexOf
console.log(arr1)
let indiceDoElemento34 = arr1.indexOf(34) // criando uma variável.
console.log(indiceDoElemento34) // ou simplificado abaixo.
console.log(arr1.indexOf(34)) // o indexOf sempre vai buscar o primeiro elemento.

let arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3.lastIndexOf(3)) // lastIndexOf para buscar o último elemento.

// Descobrindo a existência de um elemento: includes

console.log(arr1)
console.log(arr1.includes(12)) // se o elemento estiver incluído no array, ele retornará false ou true.
console.clear()

// Invertendo arrays: reverse

console.log('Array normal:', arr1)
console.log('Array invertido', arr1.reverse())
