function myFunction() {
    let x = document.getElementById("myText").value;
    let y = document.getElementById("myText2").value;

    let array1 = x.split('')

    const valueToRemoveUpperCase = y.toUpperCase().split('')
    const valueToRemoveLowerCase = y.toLowerCase().split('')
    
    let array2 = valueToRemoveUpperCase.concat(valueToRemoveLowerCase); 
        
    array1 = array1.filter(val => !array2.includes(val));
    
    
    document.getElementById("result").innerHTML = array1.join('');
}
