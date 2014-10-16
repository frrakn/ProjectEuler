
//recursive solution
var recursivep1 = function recursivep1(number){
  //if divisible by 3 or 5, add
  if(number % 5 === 0 || number % 3 === 0){
    return number + recursivep1(number-1);
  }
  //otherwise, next
  else{
    return recursivep1(number-1);
  }
};

//iterative solution
var iterativep1 = function iterativep1(number){
  //initiating answer
  var sum = 0;
  for(var i = 0; i < number; i++)
  {
    //if divisible, add
    if(i % 5 === 0 || i % 3 === 0){
      sum += i;
    }
  }
  return sum;
};

//console.log(recursivep1(1000));
console.log(iterativep1(1000));