const inputText = 'Woody the woodpecker'
const valueToRemove = 'w';


const inputTextArray = inputText.split('')
const valueToRemoveUpperCase = valueToRemove.toUpperCase()
const valueToRemoveLowerCase = valueToRemove.toLowerCase()

const filteredItems = inputTextArray.filter(inputTextArray => inputTextArray !== valueToRemoveUpperCase && inputTextArray !== valueToRemoveLowerCase)

console.log(filteredItems.join(''))

