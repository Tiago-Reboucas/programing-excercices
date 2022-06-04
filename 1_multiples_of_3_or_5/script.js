const const1 = 3;
const const2 = 5;
const maxNumber = 999;
var allNumbers = [];
var sum = 0;
var numbersEle = document.getElementById('numbers');
var answerEle = document.getElementById('answer');

countAllNumbers (const1, const2, maxNumber);
sum = sumFunction();

console.log(allNumbers);
console.log(sum);
numbersEle.innerHTML = allNumbers
answerEle.innerHTML = sum;

function countAllNumbers(a, b, max){
  for (let i = 1; i <= max; i++){
    let mult_a = i % a;
    let mult_b = i % b;

    if (mult_a == 0 || mult_b == 0){
      allNumbers.push(i);
    }
  }
}

function sumFunction (){
  var x = 0;

  for (let i = 0; i < allNumbers.length; i++){
    x = x + allNumbers[i];
  }
  return x;
}