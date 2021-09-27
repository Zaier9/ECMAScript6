let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat())


let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));


//Eliminar espacios vacios
let hello = '               hello World';
console.log(hello);
console.log(hello.trimStart());


//Se agrego también la opción de no usar el argumento error cuando utiliamos try/catch
try {
    
} catch {
    error;
}


// Se pueden transformar de Arreglos a Objetos y viceversa
let entries = [['name', 'Zaier'], ['age', 32]];

console.log(Object.fromEntries(entries))

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description)