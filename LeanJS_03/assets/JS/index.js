
const arr = [1, 2, 3, 4, 5];
arr.forEach(function (element, index, ar) {
  if(element===1){
    arr[index]=2;
  }
})
// The above code can be written using arrow function
// The above code can be written using arrow function and explicit return
console.log(arr);

const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
console.log(modifiedArray)
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const numbers = [2,2,4];

const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)
const sum = numbers.reduce((acc, cur) => cur*acc ,1)
console.log(sum)
let newsum=0;
numbers.forEach(item =>{
  newsum=newsum+item;
})
console.log(newsum);


const check =numbers.every((num) => num%2==0);
console.log(check);


const number = [2, 4, 4, 6];
const check01 = number.every((num, index) => (index + 2) % 2 === 0 && num > 0);
console.log(check01); // Kết quả: true
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)