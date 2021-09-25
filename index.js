function newFunction(name, age, country) {
    var name = name || 'Zaier';
    var age = age || 31;
    var country = country || 'AR';
    console.log(name, age, country);
}

//es6
function newFunction2(name='Zaier', age= 31, country='MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)
epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)


//multilinea
let lorem = 'Esto es una linea \n'
+ 'Es es otra linea.'

//multilinea en es6
let lorem2 = `Asi es como se hace el salto de linea
a partir de la version es6`

console.log(lorem)
console.log(lorem2)

//Destructuracion de elementos antes de ec6
let person = {
    'name': 'Zaier',
    'age': 31,
    'country': 'AR'
}

console.log(person.name, person.age)

// Destrucuracion en es6
let{ name, age, country } = person;
console.log(name, age, country);


// Spread operator en es6
let team1 = ['Zaier', 'Oscar', 'Julian']
let team2 = ['Roxana', 'Kiara', 'Agus']

let education = ['David', ...team1, ...team2];
console.log(education)