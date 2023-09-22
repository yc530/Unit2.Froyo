const flavorPrompt = prompt("please enter your desired flavors with commas in between!");
console.log(flavorPrompt);

const flavorInput = flavorPrompt.split(',');
console.log("user inputted:", flavorInput);

//(desiredFlavor[item]) << an item in the flavorInput array as referred to in line above (item of flavorInput).
//if the flavors are recognized (written in more than once), the ++ is initializing it to count it.
//however, if the flavor is 1 (new because it is not recognized or written in prompt more than once), count it as one.
const desiredFlavor ={};
for (const item of flavorInput) {
    if (desiredFlavor[item]) {
        desiredFlavor[item]++;
    } else {
        desiredFlavor[item] = 1;
    }
}

console.table(desiredFlavor);




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