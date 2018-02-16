let colors = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

//using a for loop
// let names = [];
// for (let i = 0; i<colors.length;i++){
//     names.push(colors[i].color)
   
// }
// console.log(names)

//map includes all items in the array, but expects callback to return a transformed version of the array that will  be stored in a new array
    // let names = colors.map(function(col){
        //return col.color
        //)}  

//using map with an arrow function and an inplicit return . 
//When using arrow functions, if your function has only 1 line and 1 argument, it can be shortened to look like it does below 
let names = colors.map(col =>  col.color)
//as opposed to: 
    // let names = colors.map((col) =>{  
        //return col.color
        //)}
    
//which is also the same as:
    // let names = colors.map(function(col){
        //return col.color
        //)}  


console.log(names)