var numbers = [22, 4,150, 4, 16, 25, 16, 53, 150, 6];
var tempVariable, tempVariable2, j;

console.log(numbers);

for (var j = 0; j < numbers.length; j++) {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      tempVariable2 = numbers[i + 1];
      tempVariable = numbers[i];
      numbers[i] = tempVariable2;
      numbers[i + 1] = tempVariable;
    }
  }
}
console.log(numbers);
