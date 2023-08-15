// > OBJETOS

// Como criar objetos no JavaScript?

let pessoa = {
  nome: 'Cristiano', // se for simples, no log pode colocar o modo simples.
  'nome-da-pessoa': 'Cris', // o nome se for complexo.
  idade: 40, // nome, idade, tudo isso se chama chave.
}
console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa['nome-da-pessoa']) // alternativo
console.log(pessoa.idade)

// Como adicionar um par chave-valor?
pessoa["nome-da-pessoa"] = 1.7 // Eu subsitituí o nome Cris por 1.7
pessoa.altura = 1.78 // Foi adicionado.
console.log(pessoa) 
console.clear()

// Como remover um par chave-valor?
delete pessoa["nome-da-pessoa"]
console.log(pessoa)

// Como percorrer?

for (let chave in pessoa) {
  console.log(chave)
}