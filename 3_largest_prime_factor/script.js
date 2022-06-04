var num = 600851475143;
var answer = 0;

largerFactor();

document.getElementById('answer').innerHTML = answer;
console.log ('Answer is: '+answer);

function solution(){
  num = document.getElementById('number').valueAsNumber;

  largerFactor();

  document.getElementById('answer').innerHTML = answer;
  console.log ('Answer is: '+answer);
}

function largerFactor(){
  answer = 0;
  while(num != 1){
    let i = 2;

    do {
      var value = num % i;
    
      if (value == 0){
        num /= i;
        if (i > answer){
          answer = i;
        }
      } else {
        i++
      }
    } while (value != 0);
  }
}
