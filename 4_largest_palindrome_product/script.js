var num = 0;
var answer = 0;
var x = 0;
var y = 0;
var xMax = 0;
var yMax = 0;
var iterations = 0;

answerFunction();
document.getElementById('answer').innerHTML = answer;
console.log('Answer is: '+answer);
console.log('x: '+xMax+'\ny: '+yMax+'\nIterations: '+iterations);

function answerFunction(){
  for(x = 999; x >= yMax; x--){
    for(y = 999; y > 99; y--){
      num = x * y;
      iterations++;
  
      let splitNum = num.toString().split('').map(Number);
      var i = 0;
      do {
        var match = false;

        if(splitNum[i] == splitNum[splitNum.length - (1 + i)]){
          match = true;
          i++;
        } 
      } while (match && i < 3);
      
      if (match){
        if(answer < num){
          answer = num;
          xMax = x;
          yMax = y;
        }
      }
    }
  }
}