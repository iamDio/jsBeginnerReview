//reduce is a list transformation higher order function
//its not as limited as map filter find and reject which have specific use cases 
//reduce allows you to define exactly what you want it to do

//EXAMPLE 1: 

const orders = [
    {amount:250},
    {amount:500},    
    {amount:300},
    {amount:100},
]

//lets use this array to build a function that returns the total amount

//using a for loop
// let totalAmount = 0 
// for (let i =0;i<orders.length;i++){
//     totalAmount += orders[i].amount
// }

//using reduce
//unlike map and filter, reduce wants an object as a starting point for sum. sum will be passed as the first parameter in the callback
//iterated item will be the second parameter in the callback
//
const totalAmount = orders.reduce((sum,order)=>{
    //pay attention to the result of this console log 
    //sum starts out as 0 which is the value we set below as a starting point
    //order is updated on each iteration and sum becomes the total from the previous iteration, until there are no more items left in the array
    //the result of this function will be stored in the variable used to initialize it. 
    console.log('hello',sum,order)
    return sum+order.amount
},0)
console.log(totalAmount)

//EXAMPLE 2:

const productList = [
    {type:'drink', product:'Tea', price:4, quantity:100},
    {type:'veggies', product:'Broccoli', price:5, quantity:50},
    {type:'meat', product:'Steak', price:25, quantity:10},
    {type:'drink', product:'Water', price:4, quantity:100},
    {type:'meat', product:'Chicken', price:3, quantity:15},
]