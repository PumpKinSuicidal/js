/**
 * Estudo das funções 
 */

//Função simples
function hello() {
    console.log("Hello World")
}

console.log(typeof(hello))
hello()

// Função atribída
const hello2 = function () {
// ou "const hello2 = () => {"
    console.log("Hello teste")
}

console.log(typeof(hello2))
hello2()

// Função literal
function somarS(num1,num2) {
    return (console.log(num1 + num2))
}

somarS(1,2)

const somarT = (num1, num2) => console.log(num1 + num2)

somarT(4,5)

