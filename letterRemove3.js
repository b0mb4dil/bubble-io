const inputText = 'Woody the woodpecker' // Text input
const valueToRemove = 'o'; // Letter to remove

let myArray = inputText.split('') // Turning string into array
const valueToRemoveUpperCase = valueToRemove.toUpperCase() // Letter to remove in upper case
const valueToRemoveLowerCase = valueToRemove.toLowerCase() // Letter to remove in lower case

// Array to remove
const toRemove = [valueToRemoveUpperCase, valueToRemoveLowerCase];


let result = () => (myArray = myArray.filter((i) => !toRemove.includes(i)));
console.log(result().join('')); 


// OR
let result2 = () => {
      return myArray = myArray.filter((i) => !toRemove.includes(i));
    };
console.log(result2().join('')); 

