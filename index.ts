// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
var message: string = 'hello world';
console.log(message);

var num: number = 10;
console.log(10);
/*variables*/
var name: string = 'anu';
var name1: string = 'mohan';
var num1: number = 12;
var num2: number = 23;
var Name: string = name + name1;
var sum: number = num1 + num2;
console.log('name', name);
console.log('name1', name1);
console.log('NAME IS', Name);
console.log('Sum is', sum);
/* type assertion*/
var num = 12;
var str = '10';
var str1 = 'apple';
console.log(typeof num);
console.log(typeof str1);
console.log(typeof str);
/*varible scope*/
var glob = 12;
class Number {
  glob = 10;
  static s = 11;
  num2(): void {
    var num_1 = 5;
  }
}
var n = new Number();
console.log(glob);
console.log(n.glob);
console.log(Number.s);
/*operator*/
var n1: number = 10;
var n2: number = 5;
var result: number;
result = n1 - n2;
console.log(result);
result = n1 + n2;
console.log(result);
n1++;
console.log(n1++);
n2--;
console.log(n2--);
console.log(n1 * n2);
console.log(n1 % n2);
/*operator*/
var num: number = 3;
var num2: number = 7;
console.log(num > num2);
console.log(num == num2);
console.log(num != num2);
/*if loop*/
var num: number = 5;
if (num > 0) {
  console.log('number  is positive');
}
/*if else*/
num = 12;
if (num % 2 == 0) {
  console.log('number is even');
} else {
  console.log('number is odd ');
}
