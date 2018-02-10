/*let triple = function(x) {
	return x*3
}

let waffle = triple

waffle(30)*/

let animals = [
	{ name: 'alex', species: 'alien' },
	{ name: 'caro', species: 'dog' },
	{ name: 'Pavel', species: 'alien' },
	{ name: 'paulo', species: 'alien' },
	{ name: 'gonzalo', species: 'alien' }
];

const isAlien = function(element) {
	return console.log(element.species === 'alien');
};

const aliens = animals.filter(isAlien);

/*let aliens = []

for (let i =0; i<animals.length;i++){
	if (animals[i]==='alien'){
		aliens.push(animals[i])
	}
}
*/
