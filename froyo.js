const flavorPrompt = prompt("please enter your desired flavors with commas in between!");
console.log(flavorPrompt);

const flavorInput = flavorPrompt.split(',');
console.log("user inputted:", flavorInput);







// mistakes! 
// originally thought i had to make an array or an object that incuded the order that was said in the prompt. 
// i actually had to make a prompt, and then use the split method to turn user input into arrays (a list with where the first integer starts at 0)
// const flavors = ["vanilla", "coffee", "strawberry"];


// const orderedFroyo = {
//     vanilla:3,
//     coffee: 2,
//     strawberry:1
// };
// console.log(orderedFroyo);




// const userFlavor=
// JSON.parse(flavorPrompt);