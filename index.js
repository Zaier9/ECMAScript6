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