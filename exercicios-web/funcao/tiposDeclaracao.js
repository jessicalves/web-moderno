console.log(soma(3, 4)) // chamada da função antes de declara ela 

// function declaration - posso chamar antes da declaração
//o interpretador roda primeiro as funções, por isso posso chamar a função antes de declarar ela
function soma(x, y) {
    return x + y
}

// function expression - so pode ser chamada depois da sua declaração
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))