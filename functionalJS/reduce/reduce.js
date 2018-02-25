const orders = [
    {
        amount:250
    },
    {
        amount:500
    },    {
        amount:300
    },    {
        amount:100
    },
]

//using a for loop
// let totalAmount = 0 
// for (let i =0;i<orders.length;i++){
//     totalAmount += orders[i].amount
// }

//using reduce
const totalAmount = orders.reduce(function(sum,order){
    return sum+order.amount
},0)
console.log(totalAmount)