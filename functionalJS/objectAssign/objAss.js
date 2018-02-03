//obj.assign is used to make copies of objects.

let saucyTaco = { food: 'taco', sauce: 'hot' };
let creamyTaco = { food: 'taco', hasSourcream: true };

let tacos = Object.assign(saucyTaco, creamyTaco);

console.log('saucyTaco', saucyTaco);
console.log('creamy', creamyTaco);

//the properties of the right most object passed into it will always over write the previous

let taco = { food: 'taco' };
let burrito = { food: 'burrito' };

let tacoCopy = Object.assign({}, burrito);
console.log(`tacosss ${tacoCopy}`);
Object.assign(burrito, taco, tacoCopy);

console.log('taco', taco);
console.log('burrito', burrito);
