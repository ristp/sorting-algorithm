var numbers = [22, 4, 150, 45, 1558, 16, 25, 16, 53, 150, 6];
var tempVariable, j;

console.log("List of numbers before sorting: " + numbers);

for (var j = 0; j < numbers.length; j++) {
  for (i = 0; i < numbers.length; i++) {
    sort();
  }
}

function sort() {
  if (numbers[i] > numbers[i + 1]) {
    tempVariable = numbers[i + 1];
    numbers[i + 1] = numbers[i];
    numbers[i] = tempVariable;
  }
}
console.log("List of numbers after sorting: " + numbers);
