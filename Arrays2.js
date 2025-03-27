//Exercicio 1

let cores1 = ['Azul','Preto','Amarelo']
let cores2 = ['Verde','Roxo','Ciano']

const cores12 = cores1.concat(cores2)
console.log(cores12)

//Exercicio 2

let numeros = ['1','2','3','4','5','6','7','8','9','10']
console.log(numeros)
let partenumeros = numeros.slice(3,8)
console.log(partenumeros)

//Exercicio 3

const frutas = ['Maçã','Banana','Laranja','Limão','Abacaxi']
frutas.splice(2,2,'kiwi','pêssego')
console.log(frutas)

//Exercicio 4

let menuPrincipal = ['Estrogonofe de Frango','Lasanha','PF']
let menuDeSobremesas = ['Petit gâteau','Prato de Brigadeiro','Gelatina']

const menuCompleto = menuPrincipal.concat(menuDeSobremesas)
console.log(menuCompleto)