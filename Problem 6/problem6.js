//mathematically can be defined as a recursive function where
//f(1) = 0
//f(a+1) = f(a) + (a + 1) ^ 2 * a
var problem6 = function problem6(number){
  //stores previous answer
  var lastans = 0;
  
  for(var i = 1; i < number; i++){
    //keep applying function
    lastans = lastans + Math.pow(i + 1, 2) * i;
  }
  
  return lastans;
}

console.log(problem6(100));