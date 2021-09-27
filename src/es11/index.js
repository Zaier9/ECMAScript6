//Dinamic import se realiza a partir del metodo import() que devuelve una promesa del modulo solicitado. Esto significa que podemos pedir codigo si este es necesario, algo mejor conocido como code splitting
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./file.js');
    module.hello()
})


// BigInt es un nuevo objeto incorporado(numero primitivo) que nos da JS para representar un numero entero mucho mas grande
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);


// promise.allSettled recibe un array de promesas y se resuelve cuando estas hayan sido concluidas, sin importar si fueron resueltas o rechazadas.
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


// globalThis hace referencia al objeto global, sin importar el contexto en el que se encuentra tu codigo.
console.log(window);

console.log(globalThis);


//Nuevo operador logico. NULL (??)
const food = null ?? 'default string';
console.log(food);


//Optional chaining (?)
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
}