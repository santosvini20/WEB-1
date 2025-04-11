//exercicio 1

function soma(a,b){
    return a+b;
  }
  console.log(soma(5,3))

//exercicio 2

function parimpar(numero) {
    return numero % 2 == 0 ? 'Par' : 'Impar';
  }
  console.log(parimpar(4))

//exercicio 3

function MetrospraC (a) {
    return a*1000
  }
  let resultado = MetrospraC(6)
  console.log(resultado,'milimetros')
  function MetrospraMi (a) {
    return a*100
  }
  let resultado2 = MetrospraMi(6)
  console.log(resultado2,'centimetros')

//exercicio 4

const frutas = ['maça','banana']
frutas.push('laranja','uva')
console.log(frutas)
 
//exercicio 5

const numeros = [1,2,3,4,5]
const ultimonumero = [numeros.pop()]
console.log(numeros)
console.log(ultimonumero)

//exercicio 6

const cores = ['vermelho','azul','verde']
const primeiraCor = [cores.shift()]
console.log(cores)
console.log(primeiraCor)

//exercicio 7

const animais = ['gato','cachorro']
animais.unshift('elefante','leão')
console.log(animais)

//exercicio 8

const numeros = [10,20,30,40,50]
numeros.splice(0,2,5,15)
console.log(numeros)

//exercicio 9

const letras = ['a','b','c','d','e']
const consoantesdoarray = letras.slice(1,4)
console.log(consoantesdoarray)

//exercicio 10

const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = array1.concat(array2)
console.log(array3)

//exercicio 11

function saudacao(n) {
    return `Ola,${n}`
  }
  console.log(saudacao('Ana'))

//exercicio 12

//CONST é uma variavel que não pode ser alterada, 
//LET é uma variavel que pode ser alterada dentro de um bloco especifico do codigo na qual ésta inserida. 
// Já o VAR pode ser alterado em qualquer parte do codigo

//exercicio 13

//Aparece que a variavel não foi definida.

//exercicio 14

//Usamos o typeof para mostrar qual é o tipo da variavel. Exemplo de codigo:
let idade = 10
console.log(typeof idade)


//Desafio:

let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios']
console.log("Lista original de tarefas:", tarefas)
tarefas.push('Comprar pão', 'Ler um livro')
let ultimaTarefa = [tarefas.pop()]
console.log("Última tarefa removida:", ultimaTarefa)
tarefas.unshift('Acordar cedo', 'Tomar café')
let primeiraTarefa = tarefas.shift()
console.log("Primeira tarefa removida:", primeiraTarefa)
tarefas.splice(0, 2, 'Fazer café da manhã', 'Organizar a mesa')
let tarefasSelecionadas = tarefas.slice(1, 4)
console.log("Tarefas selecionadas:", tarefasSelecionadas)
let tarefasCompletas = tarefas.concat(['Ver um filme', 'Descansar'])
console.log("Lista final de tarefas:", tarefasCompletas)

//Objetos exc 1

const carro = {
    marca:"Ford",
    modelo: "Camaro",
    ano: 2018
  };
  console.log(carro.marca);
  console.log(carro.modelo);
  console.log(carro.ano); 

//Objetos exc 2

const usuario = {
  nome: "Fernanda",
  email: "fernanda@email.com",
  idade: 25
 };
 delete usuario.email
 console.log(usuario);

//Objetos exc 3

const pessoa = {
  nome: "Carlos",
  idade: 29
 };
 pessoa.idade=30
 console.log(pessoa.idade);