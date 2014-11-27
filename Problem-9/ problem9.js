/*
  Simplifying the system of equations:
    a + b = k
    a^2 + b^2 = c^2
    
  leads to the relation
    a + b - a*b/k = k/2

  Triangle inequality theorem leads to a, b, c < k/2

  fix i to be the larger of the two legs
*/


var problem9 = function problem9(k){
  for(var i = 1; i <= k/2; i++){
    for(var j = 1; j <= i; j++){
      if(i + j - (i * j) / k === k / 2){
         return i * j * (k-i-j);
      }
    }
  }
};

console.log(problem9(1000));
