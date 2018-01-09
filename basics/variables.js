// We will begin this review session by going over data types and variable declarations in JS

//=====================================================================================================================
//var: you should strive to write your code with let and const going forward, however it is still good to know what var does, becuase a lot of the codebase you will inherit in a future role will likely be written using the var keyword.
var tryNotToUseMe = 'avoid using var and stick to let and const instead';
// the var keyword behaves similarly to let, but the main difference is in terms of scope.
// the var keyword is scoped to the nearest function block.
// let is scoped to the nearest enclosing block.

//let: let is to be used when you expect the value of the variable to change at some point in your code.
//
//Note that the following variable declerations are not wrapped inside of anything else, therefore they are declared inside the global scope.
//
//note that this varible has been declared, but not initialized
let initializeMe;
// an initialized variable is one which is set = to something
let sample = 0;

//here we can see that the declared initializeMe variable is intialized and will  calculate the tangent of a random number.
initializeMe = Math.tan(Math.random());
console.log(initializeMe);
//here we are redefining the sample variable. Note that we initially initialized it as an integer, but redifined it as a string.
//This is just to show that let in javascript allows you to do this.
sample = 'whats upppp';
console.log(sample);

//let also gives us access to what is known as "block scope". see example below.
if (true) {
	//anything inside the curly braces is considered a block.
	var test1 = 'this is var';
	let test2 = 'this is let';
	console.log(test2 + ' inside the if statement ');
	//console.log(`this is let inside the if statement ${test2}`);
}
//note that these console logs are occurring outside of the curly braces, which is to say outside of the block in which let test2 is defined and initialized
//note that var test1 is also defined and initialized inside the if statement, but because var is scoped to the nearest function block, it will still be accessible outside of the if statement
console.log(test1 + ' outside the if statement');
//note that here we get "referenceError test2 is not defined. this is because the let variable is block scoped, which means that its only available within the curly braces in which its defined."
//console.log(test2);

//====================================================================================================================

//const: const is short for constant. As the name suggests, const variables cannot be reassigned lets replicate the example above using const instead of let
//
// const are read only values so once defined they can no longer be changed.
//
//this will throw a missing initialier in const declaration. Because of the fact that const variables cannot be redifined, they must be initialized with a value.
//const trial1;
const trial2 = 0;
//this snippet of code will generate the error Assignment ot constant variable. This is because const trial2 was already initialized with a value of 0, which can be referenced but not reassigned.
//trial2 = Math.tan(Math.random());
console.log(trial2);

//===================================================================================================================
