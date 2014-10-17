//recursive helper function
//passes the limit, sum of previous nummbers, and last 2 fibonacci numbers
var recursiveHelper = function recursiveHelper(limit, sum, num1, num2){
  var num3 = num1 + num2;
  //check if above limit, return sum if above
  if(num3 > limit){
    return sum;
  }

  //check if even, add to sum
  if(num3 % 2 === 0){
    return recursiveHelper(limit, sum + num3, num2, num3);
  }
  //otherwise don't add to sum
  else{
    return recursiveHelper(limit, sum, num2, num3);
  }
};


//calculates sum of primes subject to a limit
var recursivep2 = function problem2(limit){
  //helper function, calls with first 2 elements [1,2] already processed
  return recursiveHelper(limit, 2, 1, 2);
};

console.log(recursivep2(4000000));