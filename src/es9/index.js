//Operador de reposo que nos ayuda a separa elementos de un mismo objeto, pudiendo asi solicitar datos especificos y todo lo demas queda encapsulado en el objeto.

const obj = {
    name: 'Zaier',
    age: 31,
    country: 'AR',
};

let { name, ...all } = obj;
console.log(name, all);


//Y de la siguiente forma podemos traer todo menos lo que especificamos.
const obj = {
    name: 'Zaier',
    age: 31,
    country: 'AR',
};

let { country, ...all } = obj;
console.log(all);

//Operador de PROPAGACION

const obj1 = {
    name: 'Zaier',
    age: 31,
};

const obj2 = {
    ...obj1,
    country: 'AR',
};

console.log(obj1)
console.log(obj2)

//Promise, finally. SI o SI se ejecuta el finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => cconsole.log(error))
    .finally(() => console.log('Finalizado'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-03-06');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)