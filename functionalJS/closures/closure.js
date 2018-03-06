//a clsure is a combination of a function, and the environment in which it was declared
//functions in javascript have access to variables defined outside the scope of the function block
//all functions in javascript are technically closures
//an example is an ajax request

//BASIC EXAMPLE 0
let me = 'bruce wayne'
function greeMe(){
    console.log('hello '+ me)
}
greeMe();

//BASIC EXAMPLE 1

//This function will create a displayName function which console logs the name varialbe. Note that the name variable is defined in makeFunc not displayName. 
//Displayname has access tot he value of name because its initialized in the parent scope of that function. 
function makeFunc() {
    let name = 'JS Nuggets';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

