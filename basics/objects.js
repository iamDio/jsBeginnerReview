//array
const nums = [100, 54, 49, 288];

for (let i = 0; i < nums.length; i++) {
	console.log(i);
	console.log(nums[i]);
}

//An object is a collection of related data with a properties (variables of an object), and methods (Functions of an object)

const testObj = {
	firstName: 'scott',
	lastName: 'steiner',
	fullName: function(firstName, lastName) {
		console.log(this.firstName, this.lastName);
	}
	//	fullName: (firstName, lastName) => console.log(this.firstName, this.lastName)
	//fullName: (firstName, lastName) => console.log(testObj.firstName, testObj.lastName)
};
testObj.fullName();

const arrOfObj = [
	{
		questions: 'what is your favorite thing to do?',
		answers: ['to eat', 'to drink', 'to live']
	},
	{
		questions: 'what are you doing?',
		answers: ['eating', 'playing music', 'eating and playing music']
	}
];
d;

for (let i = 0; i < arrOfObj.length; i++) {
	console.log(arrOfObj[i].questions, arrOfObj[i].answers);
}

/*arrOfObj.forEach(function(list) {
	console.log(list.questions, list.answers);
});
*/
