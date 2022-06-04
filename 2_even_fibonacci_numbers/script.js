var numbers = [1, 2]
var actualNum = 2;
const maxNumber = 4000000;
var sum = 2;

sumFunction();

document.getElementById('answer').innerHTML = sum;
console.log('Answer is: '+sum);

function sumFunction(){
  while(actualNum <= maxNumber){
    actualNum = numbers[0] + numbers[1];

    if(actualNum <= maxNumber){
      numbers[0] = numbers[1];
      numbers[1] = actualNum;

      if(actualNum % 2 == 0){
        sum += actualNum;
      }
    }
  }
}