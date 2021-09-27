//Dinamic import
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./file.js');
    module.hello()
})


//Trabjar con numeros grandes 
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);


//Nos devuelve una promesa que nos devuelve al final ya sea que todas las promesas hayan sido resueltas o rechazadas
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


//Global this => globalTHis podemos acceder al objeto window desde el codigo
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