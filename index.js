// Follow along with the examples here
function doNothing () {}

function sayHello() {
    console.log("Hello!");
}
sayHello();

function sayHelloToIsabel(){
    console.log("Hello, Isabel!");
}
sayHelloToIsabel();

function sayHelloToSophia(){
    console.log("Hello, Sophia!");
}
sayHelloToSophia();

function sayHelloToBrendan (){
    console.log("Hello, Brendan!");
}
sayHelloToBrendan();

function doSomething(thing){
    console.log(thing);
}

doSomething(2+2);

function sayHelloTo(firstName){
    console.log(`Hello, ${firstName}!`);
}
sayHelloTo('Isabel');
sayHelloTo("Sophia");
sayHelloTo("Brendan");

function say(greeting, firstName){
    console.log("firstName:", firstName);
    console.log("greeting:", greeting);
    console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Julio");
say("Julio", "Hello");

function add(x,y) {
    return x + y;
}

console.log(add(1 , 2));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
}

console.log(say("Hello", "Sofia"));

function say(greeting, firstName){
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
}

console.log(say("Howdy", "partner"));



//Try writing a function of your own that returns something.

//1
function sayNameCity(firstName, city){
    console.log(`${firstName}, ${city}`);

}
sayNameCity("Amie", "St. George");


//2
function sayNameTemp(firstName, temp){
    return `${firstName}, ${temp}`;
}
console.log(sayNameTemp("Amie", "90"));

//3
function sub(x, y){
    return x - y;
}
console.log(sub(40, 30));

//4
function subtract(x,y){
    console.log(x - y);
}
subtract(90, 50);