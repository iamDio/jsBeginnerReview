//Recursion is simply a function that calls itself, until it doesn't,
//which is to say that it will call itself until a condition is met and it doesn't need to call itself anymore.

//EXAMPLE 1:Simple showcase.
//here we are defining a function countDownFrom that will countdown from a num argument, in this case 10
let countDownFrom = num => {
	console.log(num);

	//this is the condition which causes the recursive function to stop calling itself.
	//without this condition the function will just call itself forever, and you will get an error "max call stack limit exceeded"
	//the call stack is the stack of function calls that your code has made.
	if (num === 0) return;

	// this is the recursive part of this function. We're calling countDownFrom inside the definition itself, and it will subtract 1 from num till it hits 0 then stop
	countDownFrom(num - 1);
};
// here we're invoking countDownFrom() once more, and we're setting num = 10.
countDownFrom(10);

//EXAMPLE 2: Actual application.
//everytime you do a loop you can use recursion instead. But there are things recursion can do that loops cannot. Lets look at the following example.

let categories = [
	{ id: 'animals', parent: null },
	{ id: 'mammals', parent: 'animals' },
	{ id: 'cats', parent: 'mammals' },
	{ id: 'dogs', parent: 'mammals' },
	{ id: 'golden retriever', parent: 'dogs' },
	{ id: 'labrador', parent: 'dogs' },
	{ id: 'persian', parent: 'cats' },
	{ id: 'siamese', parent: 'cats' }
];

let makeTree = (categories, parent) => {
	let node = {};
	categories.filter(x => x.parent === parent).forEach(x => (node[x.id] = makeTree(categories, x.id)));
	return node;
};
console.log(JSON.stringify(makeTree(categories, null), null, 2));

//desired output:
/*{
	animals: {
		mammals: {
			dogs: {
				golden retriever:null
				labrador: null
			},
			cats: {
				persian: null
				siamese: null
			}
		}
	}
}*/
