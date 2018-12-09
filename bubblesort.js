var numbers = [22,1,5,102,65,60];
var tempVariable, tempVariable2;

console.log("List of numbers before sorting: " + numbers);

for(i = 0; i < numbers.length; i++){
    if (numbers[i] > numbers[i+1]){
        tempVariable = numbers[i+1];
        tempVariable2 = numbers[i];
        numbers[i] = tempVariable;
        numbers[i+1] = tempVariable2;
    } 
}

console.log("List of numbers after sorting: " + numbers);
