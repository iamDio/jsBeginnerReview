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

//using map
let names = colors.map(col =>  col.color)
    //map includes all items in the array, but expects callback to return a transformed version of the array that will  be stored in a new array

console.log(names)