const inputText = 'Woody the woodpecker'
const valueToRemove = 'w';


let array1 = inputText.split('')

const valueToRemoveUpperCase = valueToRemove.toUpperCase()
const valueToRemoveLowerCase = valueToRemove.toLowerCase()

let array2 = [valueToRemoveUpperCase, valueToRemoveLowerCase]


array1 = array1.filter(val => !array2.includes(val));

console.log(array1.join(''))
