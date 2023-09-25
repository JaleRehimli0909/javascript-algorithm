// Task1
// var number = Number(prompt('Enter number..'));
// var percent = number*35/100;
// if(percent <= 1000){
//     console.log('The number satisfies the given condition.')
// }else{
//     console.log('The number does not meet the given condition')
// }

// Task2

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
