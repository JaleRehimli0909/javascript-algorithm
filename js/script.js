/*
Task1
var number = Number(prompt('Enter number..'));
var percent = number*35/100;
if(percent <= 1000){
    console.log('The number satisfies the given condition.')
}else{
    console.log('The number does not meet the given condition')
}
*/

/*
Task2
var num1 = Number(prompt("Enter num1.."));
var num2 = Number(prompt("Enter num2.."));
var simvol = prompt("Enter simvol");

switch (simvol) {
  case "+": {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  }
  case "-": {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  }
  case "*": {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  }
  case "/": {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;
  }
  default: {
    console.log("Please, enter the character correctly..");
  }
}
*/

/* Task3

var number = Number(prompt('Enter number..'));

Usul1:
var sum = (1+number)*number / 2;
console.log(sum);


Usul2:
var sum = 0;
for(let i = 0; i <=number; i++){
    sum+=i
}
console.log(sum)
*/
/*
Task4
Usul1:
for(let i =0; i<=100; i++){
    if(i%2 === 0){
        console.log(`${i} cutdur`)
    }else{
        console.log(`${i} tekdir`)
    }
}
Usul2:
for(let i =0; i<=100; i++){
    if(i%2){
        console.log(`${i} tekdir`)
    }else{
        console.log(`${i} cutdur`)
    }
}
*/
// Task5  1-500
for (let i = 2; i <= 500; i++) {
  var a = i;
  var say = 0;

  for (let j = 2; j <= a / 2; j++) {
    if (a % j === 0) {
      say++;
      break;
    }
  }
  if (say == 0) {
    console.log(a);
  }
}
