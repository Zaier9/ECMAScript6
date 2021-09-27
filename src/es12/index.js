// replace ya existia

const string = "JavaScript es maravilloso, con JavaScript estamos creando el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);


// replaceAll es lo nuevo

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//Output
//Python es maravilloso, con JavaScript estamos creando el futuro de la web
//Python es maravilloso, con Python estamos creando el futuro de la web


// Metodos privados
class Message {
    #show(val) { //con # convertimos al metodo en privado
        console.log(val);
    };
    get #add(val) {
        ...
    }
};

const message = new Message();
message.show('Hola!');


// Promise Any
const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//WeakRef(element); con esto evitamos que sea recogido por el Garbage Collector
class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    {...}
}


//Nuevos operadores logicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);