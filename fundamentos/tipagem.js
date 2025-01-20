/**
 * Tipagem dinâmica
 */
// Declarção de variaveis - let
let nome, idade, peso, altura, vip, imc

console.clear()

// Entrada de dados
nome = "Carlos" //String
idade = 20 //Number
peso = 65
altura = 1.80
vip = true //Bolean

// Verificador do tipo de variavel
// console.log(typeof(idade))

// Processamento
imc = peso / (altura*altura)
fcm = 208 - (0.7*idade)

// Saida 
console.log("Ficha do aluno")
console.log("--------------------------")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`Imc: ${imc.toFixed(2)}`)
console.log(`Fcm: ${fcm} bpm`)